import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Sitios',
        icon: 'pi pi-fw pi-globe',
        items: [
          {
            label: 'Gestionar Sitios',
            routerLink: '/sites',
          },
          {
            label: 'Añadir Sitio',
            routerLink: '/sites/add',
          },
        ],
      },
      {
        label: 'Periodicidad',
        icon: 'pi pi-fw pi-clock',
        items: [
          {
            label: 'Gestionar tipos',
            routerLink: '/types',
          },
          {
            label: 'Añadir tipos',
            routerLink: '/types/add',
          },
        ],
      },
      {
        label: 'Grupos',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'Gestionar Grupos',
            routerLink: '/groups',
          },
          {
            label: 'Añadir Grupo',
            routerLink: '/groups/add',
          },
        ],
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Gestionar Usuarios',
            routerLink: '/users',
          },
          {
            label: 'Añadir usuario',
            routerLink: '/users/add',
          },
        ],
      },
      {
        label: 'Programación de informes',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Gestionar informes',
            routerLink: '/reports',
          },
          {
            label: 'Añadir informe',
            routerLink: '/reports/add',
          },
        ],
      },
      {
        label: 'Lista de correos',
        icon: 'pi pi-fw pi-send',
        items: [
          {
            label: 'Gestionar listas de correos',
            routerLink: '/email-list',
          },
          {
            label: 'Añadir lista de correo',
            routerLink: '/email-list/add',
          },
        ],
      },
      {
        label: 'Seguridad',
        icon: 'pi pi-fw pi-shield',
        items: [
          {
            label: 'Gestionar seguridad',
            routerLink: '/security',
          },
          {
            label: 'Añadir caso ',
            routerLink: '/security/add',
          },
        ],
      },
    ];
  }
}
