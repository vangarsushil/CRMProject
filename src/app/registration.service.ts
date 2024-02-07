import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private users: { username: string; password: string }[] = [];

  constructor() {
    const storedUsers = localStorage.getItem("users");
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  register(username: string, password: string): void {
 
    this.users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  getUsers(): { username: string; password: string }[] {
    return this.users;
  }
}
