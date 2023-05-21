import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cajachicacierre',
  templateUrl: './cajachicacierre.component.html',
  styleUrls: ['./cajachicacierre.component.css']
})
export class CajachicacierreComponent implements AfterViewInit {
  @ViewChild('inputPassword2', { static: false }) cajaChicaInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    const cajaChicaInput = this.cajaChicaInput.nativeElement;

    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn: any) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('btn-primary')) { // Excluir botón "Cerrar Caja"
          const value = btn.innerText;
          cajaChicaInput.value += value;
        }
      });
    });
  }
  borrarCampo() {
    this.cajaChicaInput.nativeElement.value = '';
  }
}
