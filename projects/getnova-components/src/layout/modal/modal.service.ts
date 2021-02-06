import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Modal} from "./modal";

export type RawModal = {
  factory: ComponentFactory<Modal>,
  inputs?: ModalInputs,
  outputs?: ModalOutputs,
  close?: () => void
};

export type ModalInputs = { [key: string]: unknown };
export type ModalOutputs = { [key: string]: (event: any) => void };

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly modals0: Subject<RawModal>;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.modals0 = new Subject<RawModal>();
  }

  get modals(): Observable<RawModal> {
    return this.modals0;
  }

  public show(modal: Type<unknown>, inputs?: ModalInputs, outputs?: ModalOutputs): void {
    // @ts-ignore -> if 'Type<Modal>' you can't put in a component of type modal, for what ever reason
    this.modals0.next({factory: this.componentFactoryResolver.resolveComponentFactory(modal), inputs, outputs});
  }
}
