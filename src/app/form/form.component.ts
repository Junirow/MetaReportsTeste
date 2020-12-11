import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  uf: string;
  cidade: string;
  logradouro: string;
  CEP: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {uf: '', cidade:'', logradouro: '', CEP: ''}];




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  invalidCEP=''
  valueCEP='';
  onKey(value:string) {
    if(value.length!=10){
      this.invalidCEP="CEP inválido"
      this.valueCEP=''

    }else{
      this.invalidCEP=''
      this.valueCEP=value;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['uf', 'cidade', 'logradouro', 'CEP'];
  dataSource = ELEMENT_DATA;
}

