import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursSidebarComponent } from './tours-sidebar.component';

describe('ToursSidebarComponent', () => {
  let component: ToursSidebarComponent;
  let fixture: ComponentFixture<ToursSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
