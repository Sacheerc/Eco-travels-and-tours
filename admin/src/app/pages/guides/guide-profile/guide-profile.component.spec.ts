import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideProfileComponent } from './guide-profile.component';

describe('GuideProfileComponent', () => {
  let component: GuideProfileComponent;
  let fixture: ComponentFixture<GuideProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
