import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUnicornHumourDetailsComponent } from './daily-unicorn-humour-details.component';

describe('DailyUnicornHumourDetailsComponent', () => {
  let component: DailyUnicornHumourDetailsComponent;
  let fixture: ComponentFixture<DailyUnicornHumourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyUnicornHumourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUnicornHumourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
