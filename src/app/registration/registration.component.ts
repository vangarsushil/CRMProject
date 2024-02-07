import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxSpinnerService } from 'ngx-spinner';
import { RegistrationService } from '../registration.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  firstName = '';
  lastName = '';
  mobileNumber = '';
  username = '';
  password = '';

  constructor(
    private registrationService: RegistrationService,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar
  ) { }

  signup(): void {
    this.spinner.show();

    this.registrationService.register(this.username, this.password);
    this.authService.setRegistrationCompleted();

    setTimeout(async () => {
      await this.authService.isRegistrationCompleted ? this.router.navigate(['/login']) : alert("error")
      //  this.router.navigate(['/sideNavbar']);
      this.spinner.hide();
    }, 1000);
  }


  gotoLogin() {
    this.spinner.show();

    setTimeout(() => {
      this.router.navigate(['/login']);
      this.spinner.hide()
    }, 1000);
  }
}

