import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  usuario = "";
  senha = "";


  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    ) { }

  ngOnInit(): void {

  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => {
        console.log("Autenticado com sucesso!");
        this.router.navigate(["home"]);

      },
      error: (e) => {
        alert("Usuário ou senha inválido");
        console.error(e);
      }
    })
  };

}
