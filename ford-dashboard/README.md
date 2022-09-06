# FordDashboard

![Badge Angular CLI](https://img.shields.io/badge/Angular%20CLI-14.0.2-red)
![Badge Node](https://img.shields.io/badge/Node-16.15.1-blue)
![Badge Npm](https://img.shields.io/badge/Npm-8.15.0-yellow)

Este é o projeto final do curso de Formação em TI do Senai / Cimatec, em parceria com a Ford.

## API / Server

Para utilizar o dashboard, é necessário primeiro rodar a API.
Para isso acesse o diretório da pasta api_ford/api pelo terminal e use o comando npm install, e em seguida o npm start.

```
cd caminho_da_pasta/api_ford/api
npm install
npm start
```
A APi poderá então ser acessada na porta 3000 ( `http://localhost:3000/` ).

Agora com a API no ar, em outra janela do terminal acesse a pasta do app ford-dashboard e utilize o comando ng serve -o (para abrir uma janela no navegador com a aplicação).

```
cd caminho_da_pasta/ford-dashboard
ng serve -o
```

Dessa forma o server já estará funcionando em `http://localhost:4200/`.

## Login

Para ter acesso ao dashboard, o usuário deve primeiramente fazer o login.
O usuário padrão cadastrado é o admin senha 123456.

## Dashboard

Uma vez logado, o usuário terá acesso ao Dashboard. Nele poderá selecionar um modelo do veículo através do dropdown para obter informações, bem como pesquisar informações de veículos cadastrados através do código Vin e cadastrar novos veículos.

