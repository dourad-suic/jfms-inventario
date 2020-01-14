import { Component, OnInit } from '@angular/core';
import { Patrimonio } from './../modelo/patrimonio';
import { BackendService } from '../servicos/backend.service';

@Component({
  selector: 'app-my-danilo',
  templateUrl: './my-danilo.component.html',
  styleUrls: ['./my-danilo.component.css']
})
export class MyDaniloComponent implements OnInit {

  patrimonios: Patrimonio[];

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.patrimonios = this.backend.loadPatrimonios();
  }

}