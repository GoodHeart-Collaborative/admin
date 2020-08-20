import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPostDetailsComponent } from './expert-post-details.component';

describe('ExpertPostDetailsComponent', () => {
  let component: ExpertPostDetailsComponent;
  let fixture: ComponentFixture<ExpertPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
