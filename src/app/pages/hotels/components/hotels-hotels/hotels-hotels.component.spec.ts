import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsHotelsComponent } from './hotels-hotels.component';

describe('HotelsHotelsComponent', () => {
  let component: HotelsHotelsComponent;
  let fixture: ComponentFixture<HotelsHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
