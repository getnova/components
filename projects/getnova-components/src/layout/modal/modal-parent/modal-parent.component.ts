import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService, RawModal} from "../modal.service";
import {Subscription} from "rxjs";
import {fade} from "../../../animations";

@Component({
  selector: 'nova-modal-parent',
  templateUrl: './modal-parent.component.html',
  styleUrls: ['./modal-parent.component.scss'],
  animations: [fade]
})
export class ModalParentComponent implements OnInit, OnDestroy {

  public modals: RawModal[] = [];
  private subscription?: Subscription;

  constructor(
    private readonly modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.modalService.modals.subscribe(modal => {
      this.modals.push(modal);
      modal.close = () => this.closeModal(modal);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private closeModal(modal: RawModal): void {
    const index = this.modals.indexOf(modal)

    if (index <= -1) {
      throw new Error('Unable to find modal in list.');
    }

    this.modals.splice(index, 1);
  }
}
