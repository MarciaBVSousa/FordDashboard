import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    RodapeModule
  ]
})
export class LoginModule { }
