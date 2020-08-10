import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingListComponent } from './going-list.component';

describe('GoingListComponent', () => {
  let component: GoingListComponent;
  let fixture: ComponentFixture<GoingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
