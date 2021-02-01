import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ModalService} from "getnova-components";
import {TestModalComponent} from "./test-modal/test-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public control = new FormControl('', [Validators.required, Validators.pattern(/^\d$/), Validators.min(0), Validators.max(5)]);

  constructor(
    private readonly modaleService: ModalService
  ) {
  }

  show(): void {
    this.modaleService.show(TestModalComponent, {name: "Network Cable"});
  }
}
