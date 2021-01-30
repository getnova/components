import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public control = new FormControl('', [Validators.required, Validators.pattern(/\d/), Validators.min(0), Validators.max(5)]);
}
