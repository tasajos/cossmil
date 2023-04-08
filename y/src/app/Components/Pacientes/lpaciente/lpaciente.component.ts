import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { Medesen  } from 'src/app/Interfaz/medesen';
import { PacInt  } from 'src/app/Interfaz/pac-int';

//import { MservesencService } from 'src/app/services/mservesenc.service';
import { PacientinService } from 'src/app/services/pacientin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lpaciente',
  templateUrl: './lpaciente.component.html',
  styleUrls: ['./lpaciente.component.css']
})
export class LpacienteComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['pieza','nombrepaciente','doctor','cuidado','estado','fecha','acciones'];
  dataSource = new MatTableDataSource<PacInt>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _lpacienteservice:PacientinService,
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
  obtenerpaciente(){

    this._lpacienteservice.getpaciente().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
    this.obtenerpaciente();
  
  }
  eliminarPersonal(id:number){
    this.loading =true;
    this._lpacienteservice.deletePersonal(id).subscribe(() =>{
this.mensajeExito();
this.loading=false;
this.obtenerpaciente();
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
      Pieza: row.pieza,
      Nombre_Paciente: row.nombrepaciente,
      Doctor: row.doctor,
      Cuidado: row.cuidado,
      Estado: row.estado,
      Fecha: row.fecha,
        
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'lista_pacientes.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
};