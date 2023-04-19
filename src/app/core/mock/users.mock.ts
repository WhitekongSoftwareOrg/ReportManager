import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  private users: any[] = [
    {
      id: '1',
      name: 'Juan',
      lastName: 'Pérez',
      login: 'jperez',
      password: 'jps123',
      email: 'jperez@example.com',
      group: 'admin',
      role: 'admin',
      date: new Date('2023-04-01'),
    },
    {
      id: '2',
      name: 'María',
      lastName: 'García',
      login: 'mgarcia',
      password: 'mgc123',
      email: 'mgarcia@example.com',
      group: 'sales',
      role: 'user',
      date: new Date('2023-04-05'),
    },
    {
      id: '3',
      name: 'Carlos',
      lastName: 'Ramírez',
      login: 'cramirez',
      password: 'cra123',
      email: 'cramirez@example.com',
      group: 'sales',
      role: 'user',
      date: new Date('2023-04-10'),
    },
    {
      id: '4',
      name: 'Ana',
      lastName: 'Martínez',
      login: 'amartinez',
      password: 'ama123',
      email: 'amartinez@example.com',
      group: 'marketing',
      role: 'user',
      date: new Date('2023-04-15'),
    },
    {
      id: '5',
      name: 'David',
      lastName: 'Gómez',
      login: 'dgomez',
      password: 'dgo123',
      email: 'dgomez@example.com',
      group: 'sales',
      role: 'user',
      date: new Date('2023-04-20'),
    },
  ];

  getUsers(): Observable<any[]> {
    return of(this.users).pipe(delay(100));
  }

  getUserById(id: number | string): Observable<any> {
    return of(this.users.find((el) => el.id === id)).pipe(delay(100));
  }
}
