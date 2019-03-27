import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMainNavComponent } from './index-main-nav.component';

describe('IndexMainNavComponent', () => {
  let component: IndexMainNavComponent;
  let fixture: ComponentFixture<IndexMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMainNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
