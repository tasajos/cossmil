import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inter } from 'src/app/Interfaz/inter';
import { ServService } from 'src/app/services/serv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista-farmacia',
  templateUrl: './lista-farmacia.component.html',
  styleUrls: ['./lista-farmacia.component.css']
})
export class ListaFarmaciaComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['codigosiga','codigovademecum','unidad','descripcion','fechav','cantidadpedida','observaciones','acciones'];
  dataSource = new MatTableDataSource<Inter>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _lfarmacia:ServService,
    private _snackBar: MatSnackBar,) {}


  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      switch(property) {
        case 'codigovademecum': return item.codigovademecum;
        default: return item[property];
      }
    };

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
  obtenerPersonal(){

    this._lfarmacia.getPersonal().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
    this.obtenerPersonal();
  
  }
  eliminarPersonal(id:number){
    this.loading =true;
    this._lfarmacia.deletePersonal(id).subscribe(() =>{
this.mensajeExito();
this.loading=false;
this.obtenerPersonal();
    })
    
    
  }
  mensajeExito(){
    this._snackBar.open(" eliminado",'',{
      duration:3000
  }
)}
exportToExcel(): void {
  const data = this.dataSource.filteredData.map(row => {
    return {
      Codigosiga: row.codigosiga,
      codigovademecum: row.codigovademecum,
      Unidad: row.unidad,
      Descripcion: row.descripcion,
      Fechav: row.fechav,
      Cantidadpedida: row.cantidadpedida,
      Observaciones: row.observaciones,
      
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'Farmacia.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
}

  ;
