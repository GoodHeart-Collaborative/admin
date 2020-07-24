import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpertContentComponent } from './add-expert-content.component';

describe('AddExpertContentComponent', () => {
  let component: AddExpertContentComponent;
  let fixture: ComponentFixture<AddExpertContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpertContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpertContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
