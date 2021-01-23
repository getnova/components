import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[novaTextFieldRef]'
})
export class TextFieldRefDirective {

  public readonly native: HTMLInputElement | HTMLTextAreaElement;
  private value0: string;

  constructor(
    private readonly element: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.native = element.nativeElement;
    this.value0 = this.native.value;
  }

  get value(): string {
    return this.value0;
  }

  set value(value: string) {
    this.native.value = value;
  }

  @HostListener('input')
  private onInput(): void {
    this.value0 = this.native.value;
  }
}
