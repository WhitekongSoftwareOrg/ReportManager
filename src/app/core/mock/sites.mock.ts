import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiteMockService {
  private sites: any[] = [
    {
      id: 1,
      name: 'Site 1',
      description: 'Description of site 1',
      city: 'City 1',
      region: 'Region 1',
      country: 'Country 1',
      date: new Date(2023, 4, 1),
    },
    {
      id: 2,
      name: 'Site 2',
      description: 'Description of site 2',
      city: 'City 2',
      region: 'Region 2',
      country: 'Country 2',
      date: new Date(2023, 4, 15),
    },
    {
      id: 3,
      name: 'Site 3',
      description: 'Description of site 3',
      city: 'City 3',
      region: 'Region 3',
      country: 'Country 3',
      date: new Date(2023, 5, 1),
    },
  ];

  getSites(): Observable<any[]> {
    return of(this.sites).pipe(delay(1000));
  }

  getSitesById(id: number | string): Observable<any> {
    return of(this.sites.find((el) => el.id === id)).pipe(delay(1000));
  }
}
