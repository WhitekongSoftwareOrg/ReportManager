import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockAuthService as auth } from 'src/app/core/mock/auth.mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';
  private token?: string;

  constructor(
    private http: HttpClient,
    private mock: auth,
    private router: Router
  ) {}

  login(loginData: { email: string; password: string }): void {
    const { email, password } = loginData;
    console.log(email, password);
    this.setToken(this.mock.MOCK_TOKEN);
    this.router.navigate(['/']);
  }

  recovery(loginData: { email: string; newPassword: string }): void {
    const { email, newPassword } = loginData;
    console.log(email, newPassword);
    this.router.navigate(['/login']);
  }

  setToken(token: string): void {
    this.token = token;
  }

  isAllow(): boolean {
    return !!this.token;
  }
}
