import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlacesComponent } from './tour-places.component';

describe('TourPlacesComponent', () => {
  let component: TourPlacesComponent;
  let fixture: ComponentFixture<TourPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
