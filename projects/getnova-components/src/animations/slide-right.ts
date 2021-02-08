import {animate, state, style, transition, trigger} from "@angular/animations";

export const slideRight = trigger('slideRight', [
  state('void', style({transform: 'translateX(100%)'})),

  transition('* <=> *', animate('150ms ease-in-out'))
]);
