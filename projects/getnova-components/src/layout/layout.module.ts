import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal/modal.component';
import {ModalParentComponent} from './modal/modal-parent/modal-parent.component';
import {ModalHeaderComponent} from './modal/modal-header/modal-header.component';
import {ModalBodyComponent} from './modal/modal-body/modal-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Modal
    ModalComponent,
    ModalParentComponent,
    ModalHeaderComponent,
    ModalBodyComponent
  ],
  exports: [
    // Modal
    ModalComponent,
    ModalParentComponent,
    ModalHeaderComponent,
    ModalBodyComponent
  ]
})
export class NovaLayoutModule {
}
