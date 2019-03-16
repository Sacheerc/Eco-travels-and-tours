import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMainSliderComponent } from './index-main-slider.component';

describe('IndexMainSliderComponent', () => {
  let component: IndexMainSliderComponent;
  let fixture: ComponentFixture<IndexMainSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMainSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
