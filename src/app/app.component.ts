import { Component, OnInit } from '@angular/core';
import { Predio } from './predio';
import { BackendService} from './servicos/backend.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  titulo: string;

  predios: Predio[];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.titulo = 'JFMS'
    this.predios = this.backend.loadPredios();
  }
}
