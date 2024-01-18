import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCoursesComponent } from './site-courses.component';

describe('SiteCoursesComponent', () => {
  let component: SiteCoursesComponent;
  let fixture: ComponentFixture<SiteCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
