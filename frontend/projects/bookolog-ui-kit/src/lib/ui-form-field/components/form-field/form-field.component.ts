import { Component, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { FieldStateService } from '../../services/field-state.service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'ui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [FieldStateService],
})
export class FormFieldComponent implements OnInit {
  @ContentChildren(ErrorComponent)
  public errors: QueryList<ErrorComponent>;

  constructor(private fieldState: FieldStateService, private elRef: ElementRef<HTMLElement>) {}

  public get invalid(): boolean {
    return this.fieldState.invalid;
  }

  public get invalidControl(): boolean {
    return this.fieldState.invalidControl;
  }

  ngOnInit(): void {
    const observer = new MutationObserver(() => this.onContentChange());

    const element = this.elRef.nativeElement.querySelector('.ui-error-wrapper');

    observer.observe(element, {
      childList: true,
    });
  }

  public onContentChange(): void {
    this.fieldState.hasErrors = this.errors.length > 0;
  }
}
