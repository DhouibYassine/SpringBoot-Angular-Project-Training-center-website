import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../Session/session.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.sessionService.itIsLoggedIn(); // Implement this method in your session service
    if (!isLoggedIn) {
      // User is not logged in, redirect to login page or any other desired page
      this.router.navigate(['/DashHome']);
      return false;
    }
    return true;
  }
}
