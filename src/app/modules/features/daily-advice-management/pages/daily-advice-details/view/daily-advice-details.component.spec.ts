import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdviceDetailsComponent } from './daily-advice-details.component';

describe('DailyAdviceDetailsComponent', () => {
  let component: DailyAdviceDetailsComponent;
  let fixture: ComponentFixture<DailyAdviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAdviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAdviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
