import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextFieldComponent} from './text-field/text-field.component';
import {TextFieldRefDirective} from './text-field/text-field-ref.directive';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CheckboxRefDirective} from './checkbox/checkbox-ref.directive';
import {ButtonComponent} from './button/button.component';
import {ButtonRefDirective} from './button/button-ref.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Text Field
    TextFieldComponent,
    TextFieldRefDirective,
    CheckboxComponent,
    CheckboxRefDirective,
    ButtonComponent,
    ButtonRefDirective
  ],
  exports: [
    // Text Field
    TextFieldComponent,
    TextFieldRefDirective,
    CheckboxComponent,
    CheckboxRefDirective,
    ButtonComponent,
    ButtonRefDirective
  ]
})
export class ControlsModule {
}
