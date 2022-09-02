import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { LogoutMenuModule } from '../logout-menu/logout-menu.module';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    LogoutMenuModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
