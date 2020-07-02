import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidPasswordHintComponent } from './invalid-password-hint.component';

describe('InvalidPasswordHintComponent', () => {
  let component: InvalidPasswordHintComponent;
  let fixture: ComponentFixture<InvalidPasswordHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidPasswordHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidPasswordHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
