import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesHeaderComponent } from './guides-header.component';

describe('GuidesHeaderComponent', () => {
  let component: GuidesHeaderComponent;
  let fixture: ComponentFixture<GuidesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
