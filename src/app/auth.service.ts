import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private registrationCompleted = false;

  users: any;

  constructor(private router: Router) {

    const storedUsers = localStorage.getItem("users");
    this.users = storedUsers ? JSON.parse(storedUsers) : [];

  }


  login(username: string, password: string): boolean {
    console.log(username, password);
    if (!username || !password) {
      return false;
    }
    
    for (const user of this.users) {
      
      console.log(user.username);
      if (username === user.username && password === user.password) {
        this.loggedIn = true;
        return true;
      }
    }
    this.loggedIn = false;
    return false;
  }



  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }


  setRegistrationCompleted(): void {
    this.registrationCompleted = true;
  }

  isRegistrationCompleted(): boolean {
    return this.registrationCompleted;
  }
}
