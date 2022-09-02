import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroVeiculoDataRoutingModule } from './cadastro-veiculo-data-routing.module';
import { CadastroVeiculoDataComponent } from './cadastro-veiculo-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../mensagem/mensagem.module';


@NgModule({
  declarations: [
    CadastroVeiculoDataComponent
  ],
  imports: [
    CommonModule,
    CadastroVeiculoDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule
  ],

})
export class CadastroVeiculoDataModule { }
