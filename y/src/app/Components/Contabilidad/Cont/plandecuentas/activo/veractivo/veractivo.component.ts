import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { cajachicaInter  } from 'src/app/Interfaz/cajachica';
import { ActivoInter } from 'src/app/Interfaz/contabilidad';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { ContabiliadService} from 'src/app/services/contabiliad.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-veractivo',
  templateUrl: './veractivo.component.html',
  styleUrls: ['./veractivo.component.css']
})
export class VeractivoComponent implements OnInit,AfterViewInit {


  displayedColumns: string[] = ['totalnum','nombrecuenta','cuentamayor'];
  dataSource = new MatTableDataSource<ActivoInter>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _ractivoservice:ContabiliadService,
    private _snackBar: MatSnackBar,) {}


  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    this.dataSource.sort = this.sort;
    

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }


  obtenerActivos(){

    this._ractivoservice.getactivo().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
    this.obtenerActivos();
  
  }


};