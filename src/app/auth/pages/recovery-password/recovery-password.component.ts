import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent {

  constructor( private auth: AuthService) {}

  recovery(loginData: { email: string; newPassword: string }): void {
    this.auth.recovery(loginData);
  }

}
