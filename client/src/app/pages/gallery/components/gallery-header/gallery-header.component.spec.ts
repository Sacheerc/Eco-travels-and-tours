import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHeaderComponent } from './gallery-header.component';

describe('GalleryHeaderComponent', () => {
  let component: GalleryHeaderComponent;
  let fixture: ComponentFixture<GalleryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
