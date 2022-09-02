import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    RodapeModule
  ]
})
export class HomeModule { }
