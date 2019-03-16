import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSubscribeComponent } from './index-subscribe.component';

describe('IndexSubscribeComponent', () => {
  let component: IndexSubscribeComponent;
  let fixture: ComponentFixture<IndexSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
