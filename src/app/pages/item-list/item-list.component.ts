import { Produto } from './../../../models/model/produto';
import { Component, OnInit } from '@angular/core';

import { MarketService } from './../services/market.service';
import { ListModule } from './list.module';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  //variavel da função toggle/editar/alterar
  public mostrarConteudo: boolean = true;

  public produtos:Produto[] = [];

  constructor(private service: MarketService) {
   }

  ngOnInit(): void {
    this.produtos = this.service.getProdutos();
  }

  remove(produto: Produto) {
    this.service.removerProduto(produto);
  }

  
}
