import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaforumBodyComponent } from './qaforum-body.component';

describe('QaforumBodyComponent', () => {
  let component: QaforumBodyComponent;
  let fixture: ComponentFixture<QaforumBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaforumBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaforumBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
