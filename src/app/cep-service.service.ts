import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpClient: HttpClient) { }

  searchCEP(cep:String){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  // ufCEP(uf:String){
  //   return this.httpClient.get(`https://viacep.com.br/ws/${uf}/json/`)
  // }

  // cidadeCEP(cidade:String){
  //   return this.httpClient.get(`https://viacep.com.br/ws/${cidade}/json/`)
  // }
}
