import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopicDetailComponent } from './user-topic-detail.component';

describe('UserTopicDetailComponent', () => {
  let component: UserTopicDetailComponent;
  let fixture: ComponentFixture<UserTopicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
