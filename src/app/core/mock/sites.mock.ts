import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiteMockService {
  private sites: any[] = [
    {
      id: 1,
      name: 'Oficinas Centrales',
      description: 'Sede central de la empresa',
      city: 'Ciudad de México',
      region: 'Ciudad de México',
      country: 'México',
      date: new Date(2023, 4, 1),
    },
    {
      id: 2,
      name: 'Planta de Producción',
      description: 'Fábrica de producción de productos de la empresa',
      city: 'Guadalajara',
      region: 'Jalisco',
      country: 'México',
      date: new Date(2023, 4, 15),
    },
    {
      id: 3,
      name: 'Centro de Distribución',
      description: 'Centro de distribución de productos para todo el país',
      city: 'Monterrey',
      region: 'Nuevo León',
      country: 'México',
      date: new Date(2023, 5, 1),
    },
    {
      id: 4,
      name: 'Oficinas Regionales Norte',
      description: 'Edificio de oficinas regionales para la zona norte del país',
      city: 'Chihuahua',
      region: 'Chihuahua',
      country: 'México',
      date: new Date(2023, 5, 15),
    },
    {
      id: 5,
      name: 'Planta de Ensamble',
      description: 'Planta de ensamble de productos electrónicos',
      city: 'Tijuana',
      region: 'Baja California',
      country: 'México',
      date: new Date(2023, 6, 1),
    },
    {
      id: 6,
      name: 'Oficinas Regionales Sur',
      description: 'Edificio de oficinas regionales para la zona sur del país',
      city: 'Mérida',
      region: 'Yucatán',
      country: 'México',
      date: new Date(2023, 6, 15),
    },
    {
      id: 7,
      name: 'Centro de Investigación',
      description: 'Centro de investigación y desarrollo de nuevos productos',
      city: 'Puebla',
      region: 'Puebla',
      country: 'México',
      date: new Date(2023, 7, 1),
    },
    {
      id: 8,
      name: 'Oficinas Centrales',
      description: 'Sede central de la empresa',
      city: 'Madrid',
      region: 'Comunidad de Madrid',
      country: 'España',
      date: new Date(2023, 7, 15),
    },
    {
      id: 9,
      name: 'Fábrica de Automóviles',
      description: 'Fábrica de automóviles de la empresa',
      city: 'Tokio',
      region: 'Tokio',
      country: 'Japón',
      date: new Date(2023, 8, 1),
    },
  ];

  getSites(): Observable<any[]> {
    return of(this.sites).pipe(delay(100));
  }

  getSitesById(id: number | string): Observable<any> {
    return of(this.sites.find((el) => el.id === id)).pipe(delay(100));
  }
}
