import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from './form/form.module'

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {



  baseUrl="http://localhost:4200/"

  constructor(private httpClient: HttpClient) { }

  //Função que resgata os valores do CEP da API
  searchCEP(cep:String){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

//Função que mostra uma mensagem
  showMsg(msg:string){
    console.log(msg)
  }

  create(cep:Cep): Observable<Cep>{
    return this.httpClient.post<Cep>(this.baseUrl, cep)

  }

  read(): Observable<Cep[]>{
    return this.httpClient.get<Cep[]>(this.baseUrl)
  }



}
