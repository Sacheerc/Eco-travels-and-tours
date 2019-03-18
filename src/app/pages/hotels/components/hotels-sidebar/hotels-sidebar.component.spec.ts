import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSidebarComponent } from './hotels-sidebar.component';

describe('HotelsSidebarComponent', () => {
  let component: HotelsSidebarComponent;
  let fixture: ComponentFixture<HotelsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
