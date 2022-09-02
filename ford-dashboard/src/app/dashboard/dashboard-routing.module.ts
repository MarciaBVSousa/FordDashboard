import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVeiculoDataComponent } from '../componentes/cadastro-veiculo-data/cadastro-veiculo-data.component';
import { VeiculosResolver } from '../componentes/dashboard-cards/veiculos.resolver';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent,
    resolve: { veiculos: VeiculosResolver } },
  { path: "cadastroVin", component: CadastroVeiculoDataComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
