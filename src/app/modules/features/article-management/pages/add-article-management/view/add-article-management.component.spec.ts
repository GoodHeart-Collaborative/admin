import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleManagementComponent } from './add-article-management.component';

describe('AddArticleManagementComponent', () => {
  let component: AddArticleManagementComponent;
  let fixture: ComponentFixture<AddArticleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
