import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInspirationComponent } from './daily-inspiration.component';

describe('DailyInspirationComponent', () => {
  let component: DailyInspirationComponent;
  let fixture: ComponentFixture<DailyInspirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInspirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
