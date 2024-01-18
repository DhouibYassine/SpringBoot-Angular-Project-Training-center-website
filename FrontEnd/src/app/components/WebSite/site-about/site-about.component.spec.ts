import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAboutComponent } from './site-about.component';

describe('SiteAboutComponent', () => {
  let component: SiteAboutComponent;
  let fixture: ComponentFixture<SiteAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
