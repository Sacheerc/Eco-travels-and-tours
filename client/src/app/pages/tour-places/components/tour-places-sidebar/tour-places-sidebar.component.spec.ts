import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlacesSidebarComponent } from './tour-places-sidebar.component';

describe('TourPlacesSidebarComponent', () => {
  let component: TourPlacesSidebarComponent;
  let fixture: ComponentFixture<TourPlacesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPlacesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPlacesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
