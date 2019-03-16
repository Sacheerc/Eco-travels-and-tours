import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAdvertisementComponent } from './index-advertisement.component';

describe('IndexAdvertisementComponent', () => {
  let component: IndexAdvertisementComponent;
  let fixture: ComponentFixture<IndexAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
