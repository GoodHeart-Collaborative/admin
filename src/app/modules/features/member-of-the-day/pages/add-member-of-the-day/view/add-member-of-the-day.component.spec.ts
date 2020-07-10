import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberOfTheDayComponent } from './add-member-of-the-day.component';

describe('AddMemberOfTheDayComponent', () => {
  let component: AddMemberOfTheDayComponent;
  let fixture: ComponentFixture<AddMemberOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
