import { Produto } from './../../../models/model/produto';
import { Component, OnInit } from '@angular/core';

import { MarketService } from './../services/market.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public produtos:Produto[] = [];

  // Variável para a função toggle do editor
  public showEditor: Boolean = true;

  constructor(private service: MarketService) {
   }

  ngOnInit(): void {
    this.produtos = this.service.getProdutos();
  }

  remove(produto: Produto) {
    this.service.removerProduto(produto);
  }

  mostrarEditor() {
   this.showEditor = !this.showEditor;
  }

  update(nomeAntigo: Produto, novoNome){
    this.service.update(nomeAntigo, novoNome);
  }
  
}
