import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyUnicormHumourComponent } from './add-daily-unicorm-humour.component';

describe('AddDailyUnicormHumourComponent', () => {
  let component: AddDailyUnicormHumourComponent;
  let fixture: ComponentFixture<AddDailyUnicormHumourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyUnicormHumourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyUnicormHumourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
