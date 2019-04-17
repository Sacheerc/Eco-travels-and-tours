import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaforumComponent } from './qaforum.component';

describe('QaforumComponent', () => {
  let component: QaforumComponent;
  let fixture: ComponentFixture<QaforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
