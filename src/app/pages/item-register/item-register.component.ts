import { Component, OnInit } from '@angular/core';

import { MarketService } from './../services/market.service';
import { Produto } from './../../../models/model/produto';

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.scss']
})
export class ItemRegisterComponent implements OnInit {

  public produtos:Produto[] = [];

  constructor(private service: MarketService) { }

  ngOnInit(): void {
    this.service.getProdutos();
  }

  public cadastrarProduto(nomeProduto:Produto, precoProduto:Produto) {
    this.service.adicionarNomeProduto(nomeProduto);
    this.service.adicionarPrecoProduto(precoProduto);
  }

  public checkIn() {
    alert('Produto: Salvo com Sucesso!');
  }

}
