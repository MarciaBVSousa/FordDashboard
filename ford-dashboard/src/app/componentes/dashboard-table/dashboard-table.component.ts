import { Component, OnInit } from '@angular/core';
import { map, switchMap, debounceTime, filter, distinctUntilChanged, tap, merge } from 'rxjs';
import { DashboardTableService } from './dashboard-table.service';
import { VeiculoData, VeiculosData, VeiculosDataAPI } from './veiculoData.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {

  veiculosData!: VeiculosData;
  veiculoVin!: VeiculoData | undefined;
  vinCode = "";

  mensagem = "Sem dados";


  vin = this.DTService.getVeiculoData()

  constructor( private DTService: DashboardTableService ) { }

  ngOnInit(): void {
    //Pega Veiculos
    this.DTService.getVeiculoData().subscribe(
      (res) => {this.veiculosData = res.vehicleData});
  }

  buscaVin(change: string) {
    // Limpa selecionado
    this.veiculoVin = undefined;
    // Filtra Vin
    if(change.length ==20) {
      this.veiculosData.filter((el) => el.vin === change.toUpperCase())
        .map((el: VeiculoData) => {this.veiculoVin = el});
    }
    // Mensagens auxiliares
    this.statusVin();

  }

  // Mensagem e classe CSS da mensagem
  statusVin(): boolean {
    if(!this.vinCode || this.vinCode.length == 0) {
      this.mensagem = "Sem dados";
      return false
    }
    if(this.vinCode.length < 20) {
      this.mensagem = "O Código-Vin requer 20 caracteres; sendo eles letras e números";
      return true
    }
    if(this.vinCode.length == 20) {
      this.mensagem = "Código inválido";
      return true
    }
    return false
  };
}
