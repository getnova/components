import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ModalService, NotificationService, NotificationType} from "getnova-components";
import {TestModalComponent} from "./test-modal/test-modal.component";
import {ConfirmModalComponent} from "../../../../getnova-components/src/layout/modal/confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public control = new FormControl('', [Validators.required, Validators.pattern(/^\d$/), Validators.min(0), Validators.max(5)]);

  constructor(
    private readonly modaleService: ModalService,
    private readonly notificationService: NotificationService
  ) {
  }

  show(): void {
    this.modaleService.show(TestModalComponent, {name: "Network Cable"});
  }

  dialog(): void {
    this.notificationService.show('Error', 'Something went extremely wrong!', NotificationType.DANGER);
  }

  confirm(): void {
    this.modaleService.show(ConfirmModalComponent, {
      title: "Some Info",
      message: 'ERRRRRRRRRRRRRRRRROR'
    }, {resolve: data => console.log('Resolve', data)})
  }
}
