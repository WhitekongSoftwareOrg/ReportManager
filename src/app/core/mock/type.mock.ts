import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeMockService {
  private types: any[] = [
    {
      id: '1',
      name: 'Pagos',
      type: 'daily',
      amount: 3,
      description: 'Tres pagos diarios de $50',
      date: new Date(),
    },
    {
      id: '2',
      name: 'Entrega',
      type: 'daily',
      amount: 1,
      description: 'Entrega semanal de suministros de oficina',
      date: new Date(),
    },
    {
      id: '3',
      name: 'Facturación',
      type: 'daily',
      amount: 1,
      description: 'Facturación mensual de servicios de consultoría',
      date: new Date(),
    },
    {
      id: '4',
      name: 'Mantenimiento',
      type: 'daily',
      amount: 1000,
      description: 'Mantenimiento anual de maquinaria industrial',
      date: new Date(),
    },
    {
      id: '5',
      name: 'Limpieza',
      type: 'daily',
      amount: 20000,
      description: 'Dos limpiezas diarias de oficinas',
      date: new Date(),
    },
    {
      id: '6',
      name: 'Reunión',
      type: 'daily',
      amount: 543,
      description: 'Reunión semanal de equipo de ventas',
      date: new Date(),
    },
    {
      id: '7',
      name: 'Pago',
      type: 'daily',
      amount: 1234,
      description: 'Pago mensual de nómina a empleados',
      date: new Date(),
    },
    {
      id: '8',
      name: 'Inspección',
      type: 'daily',
      amount: 10,
      description: 'Inspección anual de instalaciones de producción',
      date: new Date(),
    },
  ];

  getTypes(): Observable<any[]> {
    return of(this.types).pipe(delay(100));
  }

  getTypeById(id: number | string): Observable<any> {
    return of(this.types.find((el) => el.id === id)).pipe(delay(100));
  }
}
