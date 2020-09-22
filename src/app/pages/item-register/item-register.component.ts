import { Component, OnInit } from '@angular/core';

import { MarketService } from './../services/market.service';
import { Produto } from './../../../models/model/produto';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Button } from 'protractor';

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.scss']
})
export class ItemRegisterComponent implements OnInit {

  public produtos:Produto[] = [];
  public msgDone:boolean = true;

  constructor(private service: MarketService) { }

  ngOnInit(): void {
    this.service.getProdutos();
  }

  public cadastrarProduto(nomeProduto:Produto, precoProduto:Produto) {
    this.service.adicionarNomeProduto(nomeProduto);
    this.service.adicionarPrecoProduto(precoProduto);
    this.checkIn();
  }
  
  public checkIn() {
    this.msgDone = !this.msgDone;
  }
}
