import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isLoggedIn: boolean = false;

  constructor() { }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  clear(key?: string): void {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  }


  // Implement your authentication logic to set the isLoggedIn value
  login(): void {
    // Perform login logic and set isLoggedIn to true upon successful login
    this.isLoggedIn = true;
  }

  logout(): void {
    // Perform logout logic and set isLoggedIn to false upon successful logout
    this.isLoggedIn = false;
  }

  // Method to check if the user is logged in
  itIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
