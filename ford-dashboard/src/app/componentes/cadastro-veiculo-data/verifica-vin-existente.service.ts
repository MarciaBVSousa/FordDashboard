import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardTableService } from '../dashboard-table/dashboard-table.service';


const API = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class VerificaVinExistenteService {

  constructor(private dashService: DashboardTableService) { }

  vinExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((vinCode) => this.dashService.verificaVinExistente(vinCode)),
        map((vinExiste)=>(vinExiste ? {vinExistente: true}: null)),
        first()
      )
    }
  }

}
