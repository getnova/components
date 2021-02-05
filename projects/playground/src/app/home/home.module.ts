import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NovaControlsModule, NovaLayoutModule} from "getnova-components";
import {ReactiveFormsModule} from "@angular/forms";
import {TestModalComponent} from "./test-modal/test-modal.component";


@NgModule({
  declarations: [
    HomeComponent,
    TestModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NovaLayoutModule,
    NovaControlsModule,
  ]
})
export class HomeModule {
}
