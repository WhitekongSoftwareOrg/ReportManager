import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class  SecurityListMockService {
  private securityList: any[] = [
    {
      id: '1',
      name: 'Entrada seguridad 1',
      windowsName: 'nombre Windows',
      windowsGroup: 'nombre grupo',
      group: 'group1 ',
      role: 'admin',
      site: 'sitio 1',
    },
    {
      id: '2',
      name: 'Entrada seguridad 2',
      windowsName: 'nombre Windows',
      windowsGroup: 'nombre grupo',
      group: 'group2 ',
      role: 'admin',
      site: 'sitio 2',
    },
    {
      id: '3',
      name: 'Entrada seguridad 3',
      windowsName: 'nombre Windows',
      windowsGroup: 'nombre grupo',
      group: 'group3 ',
      role: 'admin',
      site: 'sitio 3',
    },
  ];

  getSecurityList(): Observable<any[]> {
    return of(this.securityList).pipe(delay(100));
  }

  getSecurityListById(id: string | number): Observable<any> {
    return of(this.securityList.find((el) => el.id === id)).pipe(delay(100));
  }
}
