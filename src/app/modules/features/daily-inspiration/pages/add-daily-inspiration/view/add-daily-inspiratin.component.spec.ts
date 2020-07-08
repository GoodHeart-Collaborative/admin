import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyInspiratinComponent } from './add-daily-inspiratin.component';

describe('AddDailyInspiratinComponent', () => {
  let component: AddDailyInspiratinComponent;
  let fixture: ComponentFixture<AddDailyInspiratinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyInspiratinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyInspiratinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
