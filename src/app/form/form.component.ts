import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../cep-service.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Cep } from './form.module';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {



  items: Array<any>=[];
  newItem:any={};

  addItems() {
    this.items.push(this.newItem);
    console.log(this.items);
    this.newItem = {};
  }

  removeItem(index:any) {
    this.items.splice(index, 1); // remove 1 item at ith place
  }


  // validateForm(){

  // }






  cep: Cep={
    logradouro: 'lala',
    uf: 'll',
    localidade:'lalaland'

  }

  ceps: Cep[]


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

  constructor(private cepService:CepServiceService){
    this.ceps=[]
  }




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

  createCep():void{
    this.cepService.create(this.cep).subscribe(() => {
      this.cepService.showMsg('Succes')
    })
  }

  ngOnInit(): void {
    this.cepService.read().subscribe(ceps =>{
      this.ceps = ceps
      console.log(ceps)
    })
  }


datas=[
  {
    cep:"cep",
    logradouro:"logradouro",
    uf:"uf",
    localidade:"localidade"
  }
]



}




