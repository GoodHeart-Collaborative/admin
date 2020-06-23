import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListingFilterComponent } from './users-listing-filter.component';

describe('UsersListingFilterComponent', () => {
  let component: UsersListingFilterComponent;
  let fixture: ComponentFixture<UsersListingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
