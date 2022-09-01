import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesActifComponent } from './articles-actif.component';

describe('ArticlesActifComponent', () => {
  let component: ArticlesActifComponent;
  let fixture: ComponentFixture<ArticlesActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesActifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
