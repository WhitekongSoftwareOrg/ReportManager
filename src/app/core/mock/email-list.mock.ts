import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailsListMockService {
  private emailsList: any[] = [
    {
      id: '1',
      name: 'Lista de Leads 1',
      list: 'email1@email.com, email2@email.com',
      date: new Date(),
    },
    {
      id: '2',
      name: 'Lista de Leads 2',
      list: 'email3@email.com, email4@email.com',
      date: new Date(),
    },
    {
      id: '3',
      name: 'Lista de Leads 3',
      list: 'email5@email.com, email6@email.com',
      date: new Date(),
    },
  ];

  getEmailsList(): Observable<any[]> {
    return of(this.emailsList).pipe(delay(100));
  }

  getEmailListById(id: string | number): Observable<any> {
    return of(this.emailsList.find((el) => el.id === id)).pipe(delay(100));
  }
}
