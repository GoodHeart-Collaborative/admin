import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertImageComponent } from './expert-image.component';

describe('ExpertImageComponent', () => {
  let component: ExpertImageComponent;
  let fixture: ComponentFixture<ExpertImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
