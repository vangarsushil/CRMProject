import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    console.log("login");
  }

  login(): void {
    this.spinner.show();
    if (this.authService.login(this.username, this.password)) {
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/sideNavbar']);
      }, 1000);
    } else {
      this.snackBar.open("Username or password is incorrect. Please try again.", 'close', {
        duration: 3000,
      });
      this.spinner.hide();
    }
  }


  gotoRegistration() {
    this.spinner.show();

    setTimeout(() => {
      this.router.navigate(['/registration']);
      this.spinner.hide();
    }, 100);

  }
}
