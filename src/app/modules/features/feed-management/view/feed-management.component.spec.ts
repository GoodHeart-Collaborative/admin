import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedManagementComponent } from './feed-management.component';

describe('FeedManagementComponent', () => {
  let component: FeedManagementComponent;
  let fixture: ComponentFixture<FeedManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
