import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardsComponent } from './dashboard-cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardCardsComponent
  ]
})
export class DashboardCardsModule { }
