import { Component, OnInit } from '@angular/core';
import { CepAddService } from '../cep-add.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  constructor(private cepAddService:CepAddService) {}


  ngOnInit(): void {
  }

  createCep():void{
    this.cepAddService.showMsg('Succes')
  }

}
