import {Component, ComponentRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Modal} from "../modal";
import {RawModal} from "../modal.service";

@Component({
  selector: 'nova-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public modal!: RawModal;

  @ViewChild('parent', {read: ViewContainerRef, static: true})
  private parent!: ViewContainerRef;

  private componentRef?: ComponentRef<Modal>;

  ngOnInit(): void {
    this.componentRef = this.parent.createComponent(this.modal.factory);

    // component instance
    const instance = this.componentRef.instance as Modal & Record<string, unknown>;

    // set close function
    if (!this.modal.close) {
      throw new Error('Missing close function.');
    }
    instance.close = this.modal.close;

    // set inputs
    this.setInputs(instance);

    // if(this.modal.outputs)
    //   for (let output of this.modal.factory.outputs) {
    //     (instance[output.propName] as EventEmitter<any>).
    //   }
  }

  public close(event: Event): void {
    if (!this.modal.close) {
      throw new Error('Missing close function.');
    }

    this.modal.close();
    event.preventDefault();
  }

  @HostListener('window:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    if (event.key === 'Escape') { // IE: 'Esc'
      if (!this.modal.close) {
        throw new Error('Missing close function.');
      }

      this.modal.close();
      event.preventDefault();
    }
  }

  private setInputs(modal: Record<string, unknown>): void {
    if (!this.modal.inputs) {
      return;
    }

    let value: unknown;

    for (let input of this.modal.factory.inputs) {
      value = this.modal.inputs[input.templateName];

      if (value) {
        modal[input.propName] = value;
      }
    }
  }
}
