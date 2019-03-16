import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHotelsComponent } from './index-hotels.component';

describe('IndexHotelsComponent', () => {
  let component: IndexHotelsComponent;
  let fixture: ComponentFixture<IndexHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
