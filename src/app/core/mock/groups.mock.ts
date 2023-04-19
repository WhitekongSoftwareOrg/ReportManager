import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsMockService {
  private groups: any[] = [
    {
      id: '1',
      name: 'Equipo de Marketing',
      description:
        'Un grupo de profesionales que gestionan y ejecutan campañas de marketing para la empresa.',
      date: new Date(),
    },
    {
      id: '2',
      name: 'Departamento de Finanzas',
      description:
        'Un grupo de profesionales encargados de gestionar las finanzas de la empresa.',
      date: new Date('2023-04-19'),
    },
    {
      id: '3',
      name: 'Equipo de Desarrollo',
      description:
        'Un grupo de programadores encargados de desarrollar y mantener los productos de la empresa.',
      date: new Date('2023-04-20'),
    },
  ];

  getGroups(): Observable<any[]> {
    return of(this.groups).pipe(delay(100));
  }

  getGroupsById(id: number | string): Observable<any> {
    return of(this.groups.find((el) => el.id === id)).pipe(delay(300));
  }
}
