import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { cajachicaInter  } from 'src/app/Interfaz/cajachica';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-estadocajachica',
  templateUrl: './estadocajachica.component.html',
  styleUrls: ['./estadocajachica.component.css']
})
export class EstadocajachicaComponent implements OnInit,AfterViewInit {


  displayedColumns: string[] = ['montoinicial','transacciones','aprobaciones','otros','acciones'];
  dataSource = new MatTableDataSource<cajachicaInter>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _rmedService:CajachicaService,
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

    this._rmedService.getcaja().subscribe(data =>
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


  //eliminarPersonal(id:number){
    //this.loading =true;
    //this._rmedService.deletePersonal(id).subscribe(() =>{
//this.mensajeExito();
//this.loading=false;
//this.obtenerPersonal();
  //  })
    
    
  //}
  //mensajeExito(){
    //this._snackBar.open(" eliminado",'',{
      //duration:3000
  //}
//)}
exportToExcel(): void {
  const data = this.dataSource.filteredData.map(row => {
    return {
      Codigo: row.montoinicial,
      Descripcion: row.transacciones,
      Forma: row.aprobaciones,
      Concentracion: row.otros,
        
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'CAJACHICA.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
}

  ;