import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-guiaplancuentas',
  templateUrl: './guiaplancuentas.component.html',
  styleUrls: ['./guiaplancuentas.component.css']
})
export class GuiaplancuentasComponent implements OnInit {



  constructor() {}

  ngOnInit() {}

  activeTab: string ='';
  loadContent(tab: string) {
    this.activeTab = tab;
  }


 
}
