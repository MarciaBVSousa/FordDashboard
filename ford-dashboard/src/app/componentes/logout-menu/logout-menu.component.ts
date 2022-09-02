import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-logout-menu',
  templateUrl: './logout-menu.component.html',
  styleUrls: ['./logout-menu.component.css']
})
export class LogoutMenuComponent implements OnInit {

  mostraMenuLogout = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  abreMenuLogout() {
    this.mostraMenuLogout = !this.mostraMenuLogout;
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
