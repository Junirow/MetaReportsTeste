import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../cep-service.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface PeriodicElement {
  uf: string;
  localidade: string;
  logradouro: string;
  CEP: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {uf: 'aaa', localidade:'', logradouro: '', CEP: ''}];




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  cepInput = new FormControl("", [Validators.required])
  getErrorMessage() {
    if (this.cepInput.hasError("required")) {
      return "Este campo deve ser preenchido";
    }

    return this.cepInput.hasError("email") ? "Email inválido" : "";
  }

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

  constructor(private cepService:CepServiceService){}

  findCEP(value:any, form:any){
    this.cepService.searchCEP(value).subscribe((data)=> this.fillform(data,form));
  }

  fillform(data:any, form:any){
    form.setValue({
      cep: data.cep,
      logradouro: data.logradouro,
      uf: data.uf,
      localidade: data.localidade
    })
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['uf', 'localidade', 'logradouro', 'CEP'];
  dataSource = ELEMENT_DATA;






datas=[
  {
    cep:"cep",
    logradouro:"logradouro",
    uf:"uf",
    localidade:"localidade"
  }
]



}




