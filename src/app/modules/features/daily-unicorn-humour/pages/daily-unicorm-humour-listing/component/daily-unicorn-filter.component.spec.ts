import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUnicornFilterComponent } from './daily-unicorn-filter.component';

describe('DailyUnicornFilterComponent', () => {
  let component: DailyUnicornFilterComponent;
  let fixture: ComponentFixture<DailyUnicornFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyUnicornFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUnicornFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
