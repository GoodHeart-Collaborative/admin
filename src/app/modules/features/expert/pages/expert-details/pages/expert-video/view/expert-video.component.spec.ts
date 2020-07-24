import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertVideoComponent } from './expert-video.component';

describe('ExpertVideoComponent', () => {
  let component: ExpertVideoComponent;
  let fixture: ComponentFixture<ExpertVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
