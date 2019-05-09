import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProfileComponent } from './profile-profile.component';

describe('ProfileProfileComponent', () => {
  let component: ProfileProfileComponent;
  let fixture: ComponentFixture<ProfileProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
