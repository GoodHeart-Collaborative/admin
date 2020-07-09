import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdviceManagementComponent } from './daily-advice-management.component';

describe('DailyAdviceManagementComponent', () => {
  let component: DailyAdviceManagementComponent;
  let fixture: ComponentFixture<DailyAdviceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAdviceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAdviceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
