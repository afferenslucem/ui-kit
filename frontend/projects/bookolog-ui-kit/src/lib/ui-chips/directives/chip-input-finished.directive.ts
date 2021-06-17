import { Directive, HostListener, Optional, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NgControl } from '@angular/forms';
import { ChipSeparatorKeysDirective } from './chip-separator-keys.directive';

@Directive({
  selector: '[uiChipInputFinished]',
})
export class ChipInputFinishedDirective extends Subject<string> {
  @Output('uiChipInputFinished')
  public get finished(): Subject<string> {
    return this;
  }

  private separatorKeys: string[];

  constructor(private ngControl: NgControl, @Optional() private separators: ChipSeparatorKeysDirective) {
    super();

    this.separatorKeys = separators?.keys ?? ['Enter'];
  }

  @HostListener('keyup', ['$event'])
  public onInput(event: KeyboardEvent): void {
    if (this.separatorKeys.indexOf(event.code) === -1) {
      return;
    }

    if (this.ngControl.value) {
      this.next(this.ngControl.value);
      this.ngControl.reset();
    }
  }
}
