import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[uiChipSeparatorKeys]',
})
export class ChipSeparatorKeysDirective {
  @Input('uiChipSeparatorKeys')
  public keys: string[];

  constructor() {}
}
