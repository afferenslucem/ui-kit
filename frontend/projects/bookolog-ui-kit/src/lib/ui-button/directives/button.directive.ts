import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[uiButton]',
})
export class ButtonDirective implements OnInit {
  @Input()
  public color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | string = 'primary';

  @Input()
  public type: 'basic' | 'flat' | string = 'basic';

  constructor(private elRef: ElementRef<HTMLElement>) {}

  public ngOnInit(): void {
    this.bindColor();
    this.bindStyle();
  }

  public bindColor(): void {
    if (this.isHex(this.color)) {
      this.elRef.nativeElement.style.backgroundColor = this.color;
    } else {
      this.elRef.nativeElement.classList.add('btn', `btn-${this.color}`);
    }
  }

  public bindStyle(): void {
      this.elRef.nativeElement.classList.add(`btn-${this.type}`);
  }

  public isHex(color: string): boolean {
    color = color.replace('#', '');

    const num = parseInt(color, 16);

    return Number.isFinite(num);
  }
}
