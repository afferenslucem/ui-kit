import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[uiButton]',
})
export class ButtonDirective implements OnChanges {
  @Input()
  public color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | string = 'primary';

  @Input()
  public type: 'basic' | 'flat' | string = 'basic';

  constructor(private elRef: ElementRef<HTMLElement>) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.bindColor();
    }
  }

  public bindColor(): void {
    if (this.isHex(this.color)) {
      this.elRef.nativeElement.style.backgroundColor = this.color;
    }
  }

  public isHex(color: string): boolean {
    return color.trim().startsWith('#');
  }
}
