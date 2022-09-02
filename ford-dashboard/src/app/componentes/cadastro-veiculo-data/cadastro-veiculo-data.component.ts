import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardTableService } from '../dashboard-table/dashboard-table.service';
import { VeiculoData, VeiculosData } from '../dashboard-table/veiculoData.model';
import { NovoVeiculoData } from './novoVeiculoData.model';
import { VerificaVinExistenteService } from './verifica-vin-existente.service';


@Component({
  selector: 'app-cadastro-veiculo-data',
  templateUrl: './cadastro-veiculo-data.component.html',
  styleUrls: ['./cadastro-veiculo-data.component.css']
})
export class CadastroVeiculoDataComponent implements OnInit {

  newVinForm!: any;
  vinGroup!: VeiculoData;
  modelVin!: any;

  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private DTService: DashboardTableService,
    private verificaVin: VerificaVinExistenteService,
  ) { }

  veiculosData!: VeiculosData;

  ngOnInit(): void {
    //Pega Veiculos
    this.DTService.getVeiculoData().subscribe(
      (res) => {this.veiculosData = res.vehicleData});

    //Inicia formBuilder / validações
    this.profileForm = this.formBuilder.group({
      vin: ["", [ Validators.required,  Validators.minLength(20) ], [this.verificaVin.vinExiste()]],
      odometer: ["",  [ Validators.required ]],
      tirePressure: ["", [ Validators.required ]],
      status: ["", [ Validators.required ]],
      batteryStatus: ["", [ Validators.required ]],
      fuelLevel: ["", [ Validators.required ]],
      lat: ["", [ Validators.required ]],
      long: ["", [ Validators.required ]]
    });

};

  cadastrar() {
    const novoVeiculo = this.profileForm.getRawValue() as NovoVeiculoData;
    this.DTService.cadastrar(novoVeiculo).subscribe({
      next: () => { alert('Vin cadastrado com sucesso!') },
      error: (e: Error) => { console.error(e) }
    });
  };

}

