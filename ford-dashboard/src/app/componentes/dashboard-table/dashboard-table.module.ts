import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './dashboard-table.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../mensagem/mensagem.module';



@NgModule({
  declarations: [
    DashboardTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardTableComponent
  ]
})
export class DashboardTableModule { }
