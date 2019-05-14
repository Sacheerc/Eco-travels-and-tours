import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateGuideComponent } from './rate-guide.component';

describe('RateGuideComponent', () => {
  let component: RateGuideComponent;
  let fixture: ComponentFixture<RateGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
