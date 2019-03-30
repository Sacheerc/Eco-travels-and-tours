import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsHeaderComponent } from './hotels-header.component';

describe('HotelsHeaderComponent', () => {
  let component: HotelsHeaderComponent;
  let fixture: ComponentFixture<HotelsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
