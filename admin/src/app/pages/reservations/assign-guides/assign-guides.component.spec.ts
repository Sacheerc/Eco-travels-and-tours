import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGuidesComponent } from './assign-guides.component';

describe('AssignGuidesComponent', () => {
  let component: AssignGuidesComponent;
  let fixture: ComponentFixture<AssignGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
