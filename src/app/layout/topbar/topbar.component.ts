import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  user = {
    name: localStorage.getItem('ctk-username'),
    alias: localStorage.getItem('ctk-username')!.charAt(0) + localStorage.getItem('ctk-userlastname')!.charAt(0)
  }

  items!: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          localStorage.clear();
          this.router.navigate(['/login'])
        }
      }
    ];
  }

}
