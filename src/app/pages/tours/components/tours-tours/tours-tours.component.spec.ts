import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursToursComponent } from './tours-tours.component';

describe('ToursToursComponent', () => {
  let component: ToursToursComponent;
  let fixture: ComponentFixture<ToursToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
