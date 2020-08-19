import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncouragingMessageComponent } from './encouraging-message.component';

describe('EncouragingMessageComponent', () => {
  let component: EncouragingMessageComponent;
  let fixture: ComponentFixture<EncouragingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncouragingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncouragingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
