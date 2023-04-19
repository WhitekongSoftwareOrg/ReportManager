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
            url: '/sites',
          },
          {
            label: 'Añadir Sitio',
            url: '/sites/add',
          },
        ],
      },
      {
        label: 'Periodicidad',
        icon: 'pi pi-fw pi-clock',
        items: [
          {
            label: 'Gestionar tipos',
            url: '/types',
          },
          {
            label: 'Añadir tipos',
            url: '/types/add',
          },
        ],
      },
      {
        label: 'Grupos',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'Gestionar Grupos',
            url: '/groups',
          },
          {
            label: 'Añadir Grupo',
            url: '/groups/add',
          },
        ],
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Gestionar Usuarios',
            url: '/users',
          },
          {
            label: 'Añadir usuario',
            url: '/users/add',
          },
        ],
      },
      {
        label: 'Programación de informes',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Gestionar informes',
            url: '/reports',
          },
          {
            label: 'Añadir informe',
            url: '/reports/add',
          },
        ],
      },
      {
        label: 'Lista de correos',
        icon: 'pi pi-fw pi-send',
        items: [
          {
            label: 'Gestionar listas de correos',
            url: '/email-list',
          },
          {
            label: 'Añadir lista de correo',
            url: '/email-list/add',
          },
        ],
      },
      {
        label: 'Seguridad',
        icon: 'pi pi-fw pi-shield',
        items: [
          {
            label: 'Gestionar seguridad',
            url: '/security',
          },
          {
            label: 'Añadir caso ',
            url: '/security/add',
          },
        ],
      },
    ];
  }
}
