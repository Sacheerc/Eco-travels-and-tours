import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDestinationsComponent } from './index-destinations.component';

describe('IndexDestinationsComponent', () => {
  let component: IndexDestinationsComponent;
  let fixture: ComponentFixture<IndexDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
