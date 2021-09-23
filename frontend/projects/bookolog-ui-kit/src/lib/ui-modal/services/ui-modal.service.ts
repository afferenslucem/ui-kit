import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalRef } from '../models/modal-ref';
import { ModalConfig } from '../models/modal-config';
import { ModalData } from '../models/modal-data';
import { DIALOG_DATA } from '../injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class UiModalService {
  private viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public registerContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  public open<T>(type: Type<T>, data?: any, config?: ModalConfig): ModalRef<T> {
    const ref = new ModalRef<T>();
    const injector = this.createInjector(ref, data, config);

    ref.componentRef = this.createModal(type, injector);
    const modalHost = this.createPlaceholder(injector);

    modalHost.instance.viewInited.subscribe(() => this.attachDialog(modalHost, ref.componentRef));

    this.viewContainerRef.clear();
    this.viewContainerRef.insert(modalHost.hostView);

    ref.close$.subscribe(() => this.viewContainerRef.clear());

    return ref;
  }

  private createPlaceholder(injector: Injector): ComponentRef<ModalComponent> {
    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const modalHost = modalFactory.create(injector);

    return modalHost;
  }

  private createModal<T>(type: Type<T>, injector: Injector): ComponentRef<T> {
    const dialogFactory = this.componentFactoryResolver.resolveComponentFactory(type);
    const dialog = dialogFactory.create(injector);

    return dialog;
  }

  private attachDialog<T>(host: ComponentRef<ModalComponent>, dialog: ComponentRef<T>): void {
    host.changeDetectorRef.detectChanges();
    dialog.changeDetectorRef.detectChanges();

    host.instance.container.insert(dialog.hostView);
  }

  private createInjector<T>(ref: ModalRef<T>, data?: ModalData, config?: ModalConfig): Injector {
    let dialogInjector: Injector;
    dialogInjector = Injector.create({
      providers: [
        { provide: ModalRef, useValue: ref },
        { provide: DIALOG_DATA, useValue: data },
        { provide: ModalConfig, useValue: config || {} },
      ],
      parent: this.viewContainerRef.injector,
    });

    return dialogInjector;
  }
}
