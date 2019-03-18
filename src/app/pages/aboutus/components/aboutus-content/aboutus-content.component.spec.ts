import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusContentComponent } from './aboutus-content.component';

describe('AboutusContentComponent', () => {
  let component: AboutusContentComponent;
  let fixture: ComponentFixture<AboutusContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
