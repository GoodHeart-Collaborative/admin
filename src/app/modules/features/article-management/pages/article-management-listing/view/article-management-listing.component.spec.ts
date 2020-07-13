import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleManagementListingComponent } from './article-management-listing.component';

describe('ArticleManagementListingComponent', () => {
  let component: ArticleManagementListingComponent;
  let fixture: ComponentFixture<ArticleManagementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleManagementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleManagementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
