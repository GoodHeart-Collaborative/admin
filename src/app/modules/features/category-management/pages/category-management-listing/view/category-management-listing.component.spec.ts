import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementListingComponent } from './category-management-listing.component';

describe('CategoryManagementListingComponent', () => {
  let component: CategoryManagementListingComponent;
  let fixture: ComponentFixture<CategoryManagementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
