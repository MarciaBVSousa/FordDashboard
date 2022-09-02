import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Veiculo, Veiculos } from 'src/app/dashboard/veiculo/veiculo.model';
import { VeiculoService } from 'src/app/dashboard/veiculo/veiculo.service';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {

  veiculos!: Veiculos;
  selected!: Veiculo;
  selIndex!: any;

  images = [{id: 1, img:"ranger"}, {id: 2, img:"mustang"}, {id: 3, img:"territory"}, {id: 4, img:"broncoSport"}];
  selectedImg!: string;


  constructor(
    private veiculoService: VeiculoService,
    private activatedRoute: ActivatedRoute
    ) { };


  ngOnInit(): void {
    // Resolver
    this.activatedRoute.params.subscribe(() =>
      this.veiculos = this.activatedRoute.snapshot.data['veiculos']);
    // Inicia seleção
    this.selected = this.veiculos[0];
    this.mudaImagem(this.selected);
  }

  onSelect(selecionado: Veiculo) {
    this.indicaIndexSelecionado(selecionado);
    this.mudaImagem(selecionado);
  }

  mudaImagem(selecionado: Veiculo) {
    let id = selecionado.id;
    let image = this.images.filter((img) => img.id === id).map(el => el.img);
    this.selectedImg = `assets/img/${image}.png`
  }

  indicaIndexSelecionado(selecionado: Veiculo) {
    this.selIndex = this.veiculos.indexOf(selecionado);
  }

}





