import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './directives/input.directive';
import { LabelComponent } from './components/label/label.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectDirective } from './directives/select.directive';
import { ListDirective } from './directives/list.directive';
import { FormFieldSetComponent } from './components/form-field-set/form-field-set.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';

@NgModule({
  declarations: [
    InputDirective,
    LabelComponent,
    FormFieldComponent,
    ErrorComponent,
    SelectDirective,
    ListDirective,
    FormFieldSetComponent,
    FormHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputDirective,
    LabelComponent,
    FormFieldComponent,
    ErrorComponent,
    SelectDirective,
    ListDirective,
    FormFieldSetComponent,
    FormHeaderComponent,
  ],
})
export class UiFormFieldModule {}
