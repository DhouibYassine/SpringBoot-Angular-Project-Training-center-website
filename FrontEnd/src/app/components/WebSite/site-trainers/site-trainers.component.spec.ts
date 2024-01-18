import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTrainersComponent } from './site-trainers.component';

describe('SiteTrainersComponent', () => {
  let component: SiteTrainersComponent;
  let fixture: ComponentFixture<SiteTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTrainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
