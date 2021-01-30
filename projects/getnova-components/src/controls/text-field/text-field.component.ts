import {Component, ContentChild, ContentChildren, HostBinding, HostListener, QueryList} from '@angular/core';
import {TextFieldRefDirective} from './text-field-ref.directive';
import {FormControlDirective} from '@angular/forms';
import {TextFieldErrorDirective} from './text-field-error.directive';

@Component({
  selector: 'nova-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {

  @ContentChild(TextFieldRefDirective)
  public readonly inputRef?: TextFieldRefDirective;

  @ContentChild(FormControlDirective)
  public readonly control?: FormControlDirective;

  @ContentChildren(TextFieldErrorDirective)
  private readonly errors?: QueryList<TextFieldErrorDirective>;

  get value(): string | undefined {
    return this.inputRef?.value;
  }

  @HostBinding('class.empty')
  get empty(): boolean {
    return !this.value;
  }

  @HostBinding('class.error')
  get error(): boolean {
    if (this.control) {
      this.errors?.forEach(error => error.update(this.control?.control));
    }

    return !this.control?.valid && Boolean(this.control?.touched);
  }

  @HostListener('click')
  private onClick(): void {
    this.inputRef?.native.focus();
  }
}
