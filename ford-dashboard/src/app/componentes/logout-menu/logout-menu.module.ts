import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutMenuComponent } from './logout-menu.component';



@NgModule({
  declarations: [
    LogoutMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ LogoutMenuComponent ]
})
export class LogoutMenuModule { }
