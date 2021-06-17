import { Directive, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
  selector: '[uiChipAddOnBlur]',
})
export class ChipAddOnBlurDirective extends Subject<string> {
  @Output('uiChipAddOnBlur')
  public get finished(): Subject<string> {
    return this;
  }

  constructor(private ngControl: NgControl) {
    super();
  }

  @HostListener('blur')
  public onBlur(): void {
    if (this.ngControl.value) {
      this.next(this.ngControl.value);
      this.ngControl.reset();
    }
  }
}
