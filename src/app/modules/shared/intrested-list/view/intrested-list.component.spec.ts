import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestedListComponent } from './intrested-list.component';

describe('IntrestedListComponent', () => {
  let component: IntrestedListComponent;
  let fixture: ComponentFixture<IntrestedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
