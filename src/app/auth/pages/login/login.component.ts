import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  rememberMe: boolean = false;

  constructor( private auth: AuthService) {}

  login(loginData: { email: string; password: string }): void {
    this.auth.login(loginData);
  }

}
