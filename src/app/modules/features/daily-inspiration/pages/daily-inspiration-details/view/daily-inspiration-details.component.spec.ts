import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInspirationDetailsComponent } from './daily-inspiration-details.component';

describe('DailyInspirationDetailsComponent', () => {
  let component: DailyInspirationDetailsComponent;
  let fixture: ComponentFixture<DailyInspirationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInspirationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInspirationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
