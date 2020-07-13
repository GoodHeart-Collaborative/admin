import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleManagementDetailsComponent } from './article-management-details.component';

describe('ArticleManagementDetailsComponent', () => {
  let component: ArticleManagementDetailsComponent;
  let fixture: ComponentFixture<ArticleManagementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleManagementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
