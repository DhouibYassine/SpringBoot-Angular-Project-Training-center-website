import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSignUpEtudiantComponent } from './site-sign-up-etudiant.component';

describe('SiteSignUpEtudiantComponent', () => {
  let component: SiteSignUpEtudiantComponent;
  let fixture: ComponentFixture<SiteSignUpEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSignUpEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteSignUpEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
