import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal/modal.component';
import {ModalParentComponent} from './modal/modal-parent/modal-parent.component';
import {ModalHeaderComponent} from './modal/modal-header/modal-header.component';
import {ModalBodyComponent} from './modal/modal-body/modal-body.component';
import {PageComponent} from './page/page/page.component';
import {PageHeaderComponent} from './page/page-header/page-header.component';
import {PageFooterComponent} from './page/page-footer/page-footer.component';
import {PageBodyComponent} from './page/page-body/page-body.component';
import {PageAsideComponent} from './page/page-aside/page-aside.component';
import {PageMarkComponent} from './page/page-mark/page-mark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Modal
    ModalComponent,
    ModalParentComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    // Page
    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageBodyComponent,
    PageAsideComponent,
    PageMarkComponent
  ],
  exports: [
    // Modal
    ModalComponent,
    ModalParentComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    // Page
    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageBodyComponent,
    PageAsideComponent,
    PageMarkComponent
  ]
})
export class NovaLayoutModule {
}
