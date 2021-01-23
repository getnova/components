import {Component, ContentChild, HostBinding, HostListener, Input} from '@angular/core';
import {TextFieldRefDirective} from './text-field-ref.directive';

@Component({
  selector: 'nova-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {

  @Input()
  @HostBinding('class.error')
  public error = false;

  @ContentChild(TextFieldRefDirective)
  public inputRef?: TextFieldRefDirective;

  get value(): string | undefined {
    return this.inputRef?.value;
  }

  @HostBinding('class.empty')
  get empty(): boolean {
    return !this.value;
  }

  @HostListener('click')
  private onClick(): void {
    this.inputRef?.native.focus();
  }
}
