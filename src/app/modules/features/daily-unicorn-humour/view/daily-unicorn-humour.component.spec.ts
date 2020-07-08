import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUnicornHumourComponent } from './daily-unicorn-humour.component';

describe('DailyUnicornHumourComponent', () => {
  let component: DailyUnicornHumourComponent;
  let fixture: ComponentFixture<DailyUnicornHumourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyUnicornHumourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUnicornHumourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
