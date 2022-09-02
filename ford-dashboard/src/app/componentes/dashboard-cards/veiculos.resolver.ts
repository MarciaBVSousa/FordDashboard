import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Veiculos } from 'src/app/dashboard/veiculo/veiculo.model';
import { VeiculoService } from 'src/app/dashboard/veiculo/veiculo.service';

@Injectable({
  providedIn: 'root'
})
export class VeiculosResolver implements Resolve<Veiculos> {

  constructor(private veiculoService: VeiculoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Veiculos> {
    return this.veiculoService.getVeiculos().pipe(
      map((el) => el.vehicles));
  }
}
