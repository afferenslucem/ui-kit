import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './components/chip/chip.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { ChipSeparatorKeysDirective } from './directives/chip-separator-keys.directive';
import { ChipAddOnBlurDirective } from './directives/chip-add-on-blur.directive';
import { ChipInputFinishedDirective } from './directives/chip-input-finished.directive';

@NgModule({
  declarations: [ChipComponent, ChipListComponent, ChipSeparatorKeysDirective, ChipAddOnBlurDirective, ChipInputFinishedDirective],
  exports: [ChipComponent, ChipListComponent, ChipSeparatorKeysDirective, ChipAddOnBlurDirective, ChipInputFinishedDirective],
  imports: [CommonModule],
})
export class UiChipsModule {}
