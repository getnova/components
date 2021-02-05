import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public readonly url: string;

  constructor(
    private readonly router: Router
  ) {
    this.url = decodeURI(this.router.url.substring(1));
  }
}
