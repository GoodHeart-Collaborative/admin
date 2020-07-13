import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInspirationFilterComponent } from './daily-inspiration-filter.component';

describe('DailyInspirationFilterComponent', () => {
  let component: DailyInspirationFilterComponent;
  let fixture: ComponentFixture<DailyInspirationFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInspirationFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInspirationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
