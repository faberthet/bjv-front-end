import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesInactifComponent } from './articles-inactif.component';

describe('ArticlesInactifComponent', () => {
  let component: ArticlesInactifComponent;
  let fixture: ComponentFixture<ArticlesInactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesInactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesInactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
