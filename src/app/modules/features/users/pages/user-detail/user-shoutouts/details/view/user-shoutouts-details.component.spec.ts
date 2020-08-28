import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShoutoutsDetailsComponent } from './user-shoutouts-details.component';

describe('UserShoutoutsDetailsComponent', () => {
  let component: UserShoutoutsDetailsComponent;
  let fixture: ComponentFixture<UserShoutoutsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShoutoutsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShoutoutsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
