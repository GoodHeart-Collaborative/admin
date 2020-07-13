import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdviceFilterComponent } from './daily-advice-filter.component';

describe('DailyAdviceFilterComponent', () => {
  let component: DailyAdviceFilterComponent;
  let fixture: ComponentFixture<DailyAdviceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAdviceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAdviceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
