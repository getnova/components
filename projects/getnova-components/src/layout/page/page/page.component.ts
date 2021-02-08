import {Component, ContentChild, HostBinding, Input} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Title} from "@angular/platform-browser";
import {PageHeaderComponent} from "../page-header/page-header.component";

@Component({
  selector: 'nova-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Input()
  public appName?: string;

  @HostBinding('class.navigation')
  public navigation = false;

  @ContentChild(PageHeaderComponent)
  private header?: PageHeaderComponent;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly title: Title
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.activatedRoute.root.firstChild?.snapshot.data;
        this.navigation = data?.navigation;
        this.updateTitle(data?.name);

        if (this.navigation && this.header) {
          this.header.pageName = data?.name;
        }
      });
  }

  private updateTitle(pageName?: string): void {
    if (pageName && this.appName) {
      this.title.setTitle(`${pageName} | ${this.appName}`);
    }
    else if (pageName) {
      this.title.setTitle(pageName);
    }
    else if (this.appName) {
      this.title.setTitle(this.appName);
    }
  }
}
