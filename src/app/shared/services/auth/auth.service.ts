import { Injectable } from '@angular/core';
import { MockAuthService as auth } from 'src/app/core/mock/auth.mock';
import { Router } from '@angular/router';
import { AuthService as authService } from 'src/app/shared/services/swagger/api/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token?: string;

  constructor(
    private router: Router,
    private auth: authService
  ) {}

  login(loginData: { email: string; password: string }): void {
    const { email, password } = loginData;
    this.auth.apiAuthLoginPost({
      password,
      usuario: email
    }).subscribe( res => {
      if (res?.token) {
        this.setToken(res.token);
        console.log(res)
        localStorage.setItem('ctk-username', res.userName);
        localStorage.setItem('ctk-userid', res.userId);
        localStorage.setItem('ctk-userlastname', res.userLastName)
        this.router.navigate(['/']);
      }
    }, error => {
      if (error.status === 401) {
        alert('Usuario/Contraseña incorrecto')
      }

      alert('Ha ocurrido un error' + error)
    })
  }

  recovery(loginData: { email: string; newPassword: string }): void {
    const { email, newPassword } = loginData;
    console.log(email, newPassword);
    this.router.navigate(['/login']);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('ctk-token', token)
  }

  isAllow(): boolean {
    const token = localStorage.getItem('ctk-token');
    return !!token && token !== "";
  }
}
