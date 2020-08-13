import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListingComponent } from './forum-listing.component';

describe('ForumListingComponent', () => {
  let component: ForumListingComponent;
  let fixture: ComponentFixture<ForumListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
