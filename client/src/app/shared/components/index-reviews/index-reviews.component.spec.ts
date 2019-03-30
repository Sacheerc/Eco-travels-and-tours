import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReviewsComponent } from './index-reviews.component';

describe('IndexReviewsComponent', () => {
  let component: IndexReviewsComponent;
  let fixture: ComponentFixture<IndexReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
