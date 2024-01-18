import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceAfficheComponent } from './presence-affiche.component';

describe('PresenceAfficheComponent', () => {
  let component: PresenceAfficheComponent;
  let fixture: ComponentFixture<PresenceAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceAfficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
