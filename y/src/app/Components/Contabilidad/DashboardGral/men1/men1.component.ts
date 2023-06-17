import { Component, OnInit } from '@angular/core';
import { DashboardService} from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-men1',
  templateUrl: './men1.component.html',
  styleUrls: ['./men1.component.css']
})
export class Men1Component implements OnInit {
  totalRegistros: number = 0;
  totalRegistrosp: number = 0;
  totalRegistroscd: number = 0;
  totalRegistroscpat: number = 0;
  totalRegistroscuentapt: number = 0;
  totalRegistroscoperacion: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getTotalRegistrosDB();
    this.getTotalRegistrosDBpasivo();
    this.getTotalRegistrosDBcdistribucion();
    this.getTotalRegistrosDBcpatrimonio();
    this.getTotalRegistrosDBcproducto();
    this.getTotalRegistrosDBcoperacion();
  }

  getTotalRegistrosDB(): void {
    this.dashboardService.getplancuentasactivoT().subscribe(
      (total: number) => {
        this.totalRegistros = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getTotalRegistrosDBpasivo(): void {
    this.dashboardService.getplancuentaspasivoT().subscribe(
      (total: number) => {
        this.totalRegistrosp = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getTotalRegistrosDBcdistribucion(): void {
    this.dashboardService.getplancuentasdistribucionT().subscribe(
      (total: number) => {
        this.totalRegistroscd = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTotalRegistrosDBcpatrimonio(): void {
    this.dashboardService.getplancuentaspatrimonioT().subscribe(
      (total: number) => {
        this.totalRegistroscpat = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTotalRegistrosDBcproducto(): void {
    this.dashboardService.getplancuentasproductoT().subscribe(
      (total: number) => {
        this.totalRegistroscuentapt = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTotalRegistrosDBcoperacion(): void {
    this.dashboardService.getplancuentascoperacionT().subscribe(
      (total: number) => {
        this.totalRegistroscoperacion = total;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
