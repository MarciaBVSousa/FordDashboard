import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoVeiculoData } from '../cadastro-veiculo-data/novoVeiculoData.model';
import { VeiculosDataAPI } from './veiculoData.model';

const API = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class DashboardTableService {

  constructor(private httpClient: HttpClient) { }

  getVeiculoData(): Observable<VeiculosDataAPI>{
    return this.httpClient.get<VeiculosDataAPI>(`${API}/vehicledata`);
  }

  cadastrar(veiculo: NovoVeiculoData) {
    console.log(veiculo);
    return this.httpClient.post(`${API}/vehicledata/register`, veiculo);
  }

  verificaVinExistente(novoVin: string) {
    return this.httpClient.get(`${API}/vehicledata/exists/${novoVin}`)
  }

}
