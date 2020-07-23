import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBasicDetailsComponent } from './expert-basic-details.component';

describe('ExpertBasicDetailsComponent', () => {
  let component: ExpertBasicDetailsComponent;
  let fixture: ComponentFixture<ExpertBasicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertBasicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
