import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { cirugiaInter } from 'src/app/Interfaz/cirugia';
import { CirugiaservService } from 'src/app/services/cirugiaserv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listacirugia',
  templateUrl: './listacirugia.component.html',
  styleUrls: ['./listacirugia.component.css']
})
export class ListacirugiaComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['paciente','grado','unidad','tipointer','fechap','fecham','fechaa','tiposangre','observaciones','acciones'];
  dataSource = new MatTableDataSource<cirugiaInter>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _cirugiaService:CirugiaservService,
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

    this._cirugiaService.getPersonal().subscribe(data =>
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
    this._cirugiaService.deletePersonal(id).subscribe(() =>{
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
      Paciente: row.paciente,
      Grado: row.grado,
      Unidad: row.unidad,
      Tipo: row.tipointer,
      Dia: row.fechap,
      Mes: row.fecham,
      Año: row.fechaa,
      Tipo_sangre: row.tiposangre,
      Observaciones: row.observaciones,
      
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'tabla.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
}

  ;