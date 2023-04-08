import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medesen  } from 'src/app/Interfaz/medesen';
import { MservesencService } from 'src/app/services/mservesenc.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista-esencial',
  templateUrl: './lista-esencial.component.html',
  styleUrls: ['./lista-esencial.component.css']
})
export class ListaEsencialComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['codigo','descripcion','forma','concentracion','acciones'];
  dataSource = new MatTableDataSource<Medesen>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _rmedService:MservesencService,
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
  obtenerPersonal(){

    this._rmedService.getPersonal().subscribe(data =>
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
    this._rmedService.deletePersonal(id).subscribe(() =>{
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
      Codigo: row.codigo,
      Descripcion: row.descripcion,
      Forma: row.forma,
      Concentracion: row.concentracion,
        
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'lista_medicamentos_esenciales.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
}

  ;