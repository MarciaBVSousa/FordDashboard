import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardsModule } from '../componentes/dashboard-cards/dashboard-cards.module';
import { DashboardTableModule } from '../componentes/dashboard-table/dashboard-table.module';
import { CadastroVeiculoDataModule } from '../componentes/cadastro-veiculo-data/cadastro-veiculo-data.module';


@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCardsModule,
    DashboardTableModule,
    CadastroVeiculoDataModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
