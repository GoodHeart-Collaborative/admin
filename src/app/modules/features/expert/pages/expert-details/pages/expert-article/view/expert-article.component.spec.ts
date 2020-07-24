import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertArticleComponent } from './expert-article.component';

describe('ExpertArticleComponent', () => {
  let component: ExpertArticleComponent;
  let fixture: ComponentFixture<ExpertArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
