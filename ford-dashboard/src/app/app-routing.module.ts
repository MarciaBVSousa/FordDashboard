import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule), canLoad: [LoginGuard] },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule), canLoad: [AutenticacaoGuard] },
  { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


