import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullImageComponent } from './view-full-image.component';

describe('ViewFullImageComponent', () => {
  let component: ViewFullImageComponent;
  let fixture: ComponentFixture<ViewFullImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFullImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFullImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
