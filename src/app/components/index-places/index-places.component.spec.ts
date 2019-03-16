import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlacesComponent } from './index-places.component';

describe('IndexPlacesComponent', () => {
  let component: IndexPlacesComponent;
  let fixture: ComponentFixture<IndexPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
