import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReporttMockService {
  private reportList: any[] = [
    {
      id: '1',
      name: 'Informe mensual',
      site: 'site1',
      group: 'sales',
      type: 'weekly',
      first_execution: new Date('2023-05-01T00:00:00Z'),
      date_cell: new Date('2023-05-01T00:00:00Z'),
      file_name: 'informe-ventas-mensual.xlsx',
      macro_before: 'limpiar_datos',
      macro_after: 'enviar_correo',
      notification_format: 'DD/MM/YYYY - Ventas Mensual',
      description: 'Informe para la reunión del departamento de ventas',
      validation_required: true,
      comment_range: 'A1:A10',
      execution_time: new Date(),
      email_list: 'ventas@miempresa.com',
      review_list: 'jefe_ventas@miempresa.com',
      disabled: false,
    },
    {
      id: '2',
      name: 'Informe semanal',
      site: 'site1',
      group: 'sales',
      type: 'weekly',
      first_execution: new Date('2023-05-02T00:00:00Z'),
      date_cell: new Date('2023-05-02T00:00:00Z'),
      file_name: 'informe-marketing-semanal.xlsx',
      macro_before: 'filtrar_datos',
      macro_after: 'enviar_correo',
      notification_format: 'DD/MM/YYYY - Marketing Semanal',
      description: 'Informe para el equipo de marketing',
      validation_required: false,
      comment_range: 'B1:B10',
      execution_time: new Date(),
      email_list: 'marketing@miempresa.com',
      review_list: 'jefe_marketing@miempresa.com',
      disabled: false,
    },
    {
      id: '3',
      name: 'Informe diario',
      site: 'site1',
      group: 'sales',
      type: 'weekly',
      first_execution: new Date('2023-05-03T00:00:00Z'),
      date_cell: new Date('2023-05-03T00:00:00Z'),
      file_name: 'informe-desarrollo-diario.xlsx',
      macro_before: 'verificar_conexiones',
      macro_after: 'enviar_correo',
      notification_format: 'DD/MM/YYYY - Desarrollo Diario',
      description: 'Informe para el equipo de desarrollo',
      validation_required: true,
      comment_range: 'C1:C10',
      execution_time: new Date(),
      email_list: 'desarrollo@miempresa.com',
      review_list: 'jefe_desarrollo@miempresa.com',
      disabled: false,
    },
  ];

  getReportList(): Observable<any[]> {
    return of(this.reportList).pipe(delay(100));
  }

  getReportById(id: string | number): Observable<any> {
    return of(this.reportList.find((el) => el.id === id)).pipe(delay(100));
  }
}
