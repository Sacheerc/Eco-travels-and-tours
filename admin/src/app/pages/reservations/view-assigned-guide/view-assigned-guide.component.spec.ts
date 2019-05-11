import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedGuideComponent } from './view-assigned-guide.component';

describe('ViewAssignedGuideComponent', () => {
  let component: ViewAssignedGuideComponent;
  let fixture: ComponentFixture<ViewAssignedGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignedGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignedGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
