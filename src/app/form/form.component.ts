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


//Criando um array items para conseguir guardar os dados referente ao CEP e
// manipular estes dados para adicionar na tabela, e um objeto: newItem.
  items: Array<any>=[];
  newItem:any={};

//Função que adiciona itens no array.
  addItems() {
    this.items.push(this.newItem);
    console.log(this.items);
    this.newItem = {};
  }

  //Função que remove os itens do array.
  removeItem(index:any) {
    this.items.splice(index, 1);
  }



  cep: Cep={
    logradouro: '',
    uf: '',
    localidade:''

  }

  ceps: Cep[]



//Validação do campo de texto do CEP, se estiver vazio, uma mensagem de erro é acionada.
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


  //Método construtor com um array da classe Cep
  constructor(private cepService:CepServiceService){
    this.ceps=[]
  }



//Função que puxa os dados da API referentes ao CEP.
  findCEP(value:any, form:any){
    this.cepService.searchCEP(value).subscribe((data)=> this.fillform(data,form));
  }

//Função que preenche o logradouro, UF e a localidade de acordo com o CEP específico.
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




