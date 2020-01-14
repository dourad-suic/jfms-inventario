import { Injectable } from '@angular/core';
import { Predio } from './../predio'
import { Patrimonio } from './../modelo/patrimonio'

@Injectable()
export class BackendService {

  predios: Predio[] = [
    new Predio('Forum', 20),
    new Predio('Juizado', 11),
    new Predio('Ponta Porã', 13),
  ];

  patrimonios: Patrimonio[] = [
    new Patrimonio(18180, 'ESTANTE EM ACO, MED. 1980MM X 920MM X 420MM'),
  ];

  constructor() { }

  loadPredios(): Predio[] {
    return this.predios;
  }

  loadPatrimonios(): Patrimonio[] {
    return this.patrimonios;
  }
}