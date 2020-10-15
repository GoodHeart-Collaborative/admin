import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRelatedCategoryPostComponent } from './event-related-category-post.component';

describe('EventRelatedCategoryPostComponent', () => {
  let component: EventRelatedCategoryPostComponent;
  let fixture: ComponentFixture<EventRelatedCategoryPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRelatedCategoryPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRelatedCategoryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
