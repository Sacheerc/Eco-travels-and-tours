import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesGuidesComponent } from './guides-guides.component';

describe('GuidesGuidesComponent', () => {
  let component: GuidesGuidesComponent;
  let fixture: ComponentFixture<GuidesGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
