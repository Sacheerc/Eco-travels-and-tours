import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesServicesComponent } from './services-services.component';

describe('ServicesServicesComponent', () => {
  let component: ServicesServicesComponent;
  let fixture: ComponentFixture<ServicesServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
