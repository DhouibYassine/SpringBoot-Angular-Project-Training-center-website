import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEventsComponent } from './site-events.component';

describe('SiteEventsComponent', () => {
  let component: SiteEventsComponent;
  let fixture: ComponentFixture<SiteEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
