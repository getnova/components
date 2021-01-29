import {TextFieldRefDirective} from './text-field-ref.directive';
import {ElementRef} from '@angular/core';

describe('TextFieldRefDirective', () => {
  it('should create an instance', () => {
    const eleRef: ElementRef = {nativeElement: {value: ''}};
    const directive = new TextFieldRefDirective(eleRef);
    expect(directive).toBeTruthy();
  });
});
