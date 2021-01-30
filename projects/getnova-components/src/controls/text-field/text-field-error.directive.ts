import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Directive({
  selector: '[novaTextFieldError]'
})
export class TextFieldErrorDirective implements OnInit {

  @Input()
  public novaTextFieldError?: string;

  @HostBinding('hidden')
  private hidden = true;

  ngOnInit() {
    if (!this.novaTextFieldError) {
      console.warn('[novaTextFieldError]: Please provide a error code.')
    }
  }

  public update(control?: FormControl): void {
    if (this.novaTextFieldError) {
      this.hidden = !control?.touched || !control?.hasError(this.novaTextFieldError);
    }
  }
}
