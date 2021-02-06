import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageMarkComponent} from './page-mark.component';

describe('PageMarkComponent', () => {
  let component: PageMarkComponent;
  let fixture: ComponentFixture<PageMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMarkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
