import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaforumHeaderComponent } from './qaforum-header.component';

describe('QaforumHeaderComponent', () => {
  let component: QaforumHeaderComponent;
  let fixture: ComponentFixture<QaforumHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaforumHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaforumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
