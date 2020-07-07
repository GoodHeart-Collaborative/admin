import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementDetailsComponent } from './category-management-details.component';

describe('CategoryManagementDetailsComponent', () => {
  let component: CategoryManagementDetailsComponent;
  let fixture: ComponentFixture<CategoryManagementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
