import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VeiculosAPI } from './veiculo.model';

const API = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private httpClient: HttpClient) { }

  getVeiculos(): Observable<VeiculosAPI>{
    return this.httpClient.get<VeiculosAPI>(`${API}/vehicle`)
//      .pipe(map((api) => api.vehicles))
  }

}
