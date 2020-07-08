import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUnicornHumourListingComponent } from './daily-unicorn-humour-listing.component';

describe('DailyUnicornHumourListingComponent', () => {
  let component: DailyUnicornHumourListingComponent;
  let fixture: ComponentFixture<DailyUnicornHumourListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyUnicornHumourListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUnicornHumourListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
