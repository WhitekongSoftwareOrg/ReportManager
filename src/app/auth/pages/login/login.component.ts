import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  rememberMe: boolean = false;
  email!: string;
  password!: string;

  constructor(private auth: AuthService) { }

  login(): void {
    this.auth.login({ email: this.email, password: this.password });
  }
}
