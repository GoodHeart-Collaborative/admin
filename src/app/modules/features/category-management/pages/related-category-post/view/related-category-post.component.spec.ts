import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCategoryPostComponent } from './related-category-post.component';

describe('RelatedCategoryPostComponent', () => {
  let component: RelatedCategoryPostComponent;
  let fixture: ComponentFixture<RelatedCategoryPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedCategoryPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCategoryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
