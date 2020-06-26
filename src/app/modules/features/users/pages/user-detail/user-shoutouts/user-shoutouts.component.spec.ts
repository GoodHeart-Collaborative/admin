import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShoutoutsComponent } from './user-shoutouts.component';

describe('UserShoutoutsComponent', () => {
  let component: UserShoutoutsComponent;
  let fixture: ComponentFixture<UserShoutoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShoutoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShoutoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
