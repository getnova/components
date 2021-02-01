import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Modal} from "../../../../getnova-components/src/layout";

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent extends Modal implements OnDestroy,OnInit {

  @Input()
  name?: string = "Loading...";

  ngOnInit() {
    console.log(this.name);
  }

  ngOnDestroy() {
    console.log('[TestModalComponent] onDestroy()')
  }
}
