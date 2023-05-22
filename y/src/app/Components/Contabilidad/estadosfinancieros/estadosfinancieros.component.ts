import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { aperturacajachicaInter } from 'src/app/Interfaz/cajachica';
import { registrocajachicaInter } from 'src/app/Interfaz/cajachica';
import { CajachicaService } from 'src/app/services/cajachica.service';

@Component({
  selector: 'app-estadosfinancieros',
  templateUrl: './estadosfinancieros.component.html',
  styleUrls: ['./estadosfinancieros.component.css']
})
export class EstadosfinancierosComponent implements OnInit {


  montoinicial: number | null = null; // Variable para almacenar el monto inicial
  monto: number | null = null; // Variable para almacenar el monto inicial
  fechai: number | null = null; // Variable para almacenar el monto inicial
  fechaAperturaCajaChica: string | null = null; // Variable para almacenar la fecha de apertura
  aprobaciones: number | null = null;
  ultimoMontotr: number | null = null; // Agrega esta línea para declarar la propiedad
  fechaCreacion: string | null = null; // Agrega esta línea para declarar la propiedad

  constructor(private cajachicaService: CajachicaService) {}

  ngOnInit(): void {
    this.getFechaAperturaCajaChica();
    this.obtenerMonto();
    
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

 

  obtenerMonto() {
    this.cajachicaService.getgastoscajachica().subscribe(
      (data: any) => {
        if (data) {
          this.monto = data;
          this.fechai = data;
        }
      },
      (error: any) => {
        console.error('Error al obtener el monto', error);
      }
    );
  }
}  
  
  
  
  
  
  



