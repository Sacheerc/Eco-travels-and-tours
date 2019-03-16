import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReservationComponent } from './index-reservation.component';

describe('IndexReservationComponent', () => {
  let component: IndexReservationComponent;
  let fixture: ComponentFixture<IndexReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
