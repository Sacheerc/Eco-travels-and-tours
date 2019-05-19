import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastEmailsComponent } from './broadcast-emails.component';

describe('BroadcastEmailsComponent', () => {
  let component: BroadcastEmailsComponent;
  let fixture: ComponentFixture<BroadcastEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
