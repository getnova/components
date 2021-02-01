import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NovaControlsModule, NovaLayoutModule} from 'getnova-components';
import {TestModalComponent} from './test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NovaControlsModule,
    NovaLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
