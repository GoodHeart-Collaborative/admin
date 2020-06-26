import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasicDetailComponent } from './user-basic-detail.component';

describe('UserBasicDetailComponent', () => {
  let component: UserBasicDetailComponent;
  let fixture: ComponentFixture<UserBasicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBasicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBasicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
