import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionNavComponent } from './subsection-nav.component';

describe('SubsectionNavComponent', () => {
  let component: SubsectionNavComponent;
  let fixture: ComponentFixture<SubsectionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
