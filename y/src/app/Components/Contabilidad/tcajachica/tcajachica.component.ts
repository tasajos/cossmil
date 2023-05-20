import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { aperturacajachicaInter } from 'src/app/Interfaz/cajachica';
import { copiarcajachicaInter } from 'src/app/Interfaz/cajachica';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tcajachica',
  templateUrl: './tcajachica.component.html',
  styleUrls: ['./tcajachica.component.css']
})
export class TcajachicaComponent implements OnInit {
  montoinicial: number | null = null; // Variable para almacenar el monto inicial
  fechaAperturaCajaChica: string | null = null; // Variable para almacenar la fecha de apertura
  aprobaciones: number | null = null;
  ultimoMontotr: number | null = null; // Agrega esta línea para declarar la propiedad

  constructor(private cajachicaService: CajachicaService) {}

  ngOnInit(): void {
    this.getFechaAperturaCajaChica();
    this.getUltimoMontotr();
  
  }

  ngAfterViewInit(): void {
    this.cajachicaService.verquerycajachica().subscribe(
      (ultimoMontotr: number) => {
        this.ultimoMontotr = ultimoMontotr;
      },
      (error: any) => {
        console.error('Error al obtener el último valor de montotr:', error);
      }
    );
  }

  getUltimoMontotr(): void {
    this.cajachicaService.getUltimoMontotr().subscribe(
      (ultimoMontotr: number) => {
        this.ultimoMontotr = ultimoMontotr;
      },
      (error: any) => {
        console.error('Error al obtener el último valor de montotr:', error);
      }
    );
  }

  getFechaAperturaCajaChica(): void {
    this.cajachicaService.getcajafecha().subscribe(
      (data: aperturacajachicaInter | null) => {
        if (data) {
          this.montoinicial = parseFloat(data.montoinicial);
          this.fechaAperturaCajaChica = this.formatDate(new Date());
          this.aprobaciones = data.aprobaciones;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
  
  
}