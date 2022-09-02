import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManterLogadoService {

  static manterLogado: boolean;

  opcaoLogado(valor: boolean) {
    ManterLogadoService.manterLogado = valor;
  }

  constructor() { }
}
