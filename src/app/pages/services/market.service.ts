import { Produto } from './../../../models/model/produto';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MarketService {

  public produtos:Produto[] = [];

  constructor() { }

  getProdutos() {
    return this.produtos;
  }

  // Métodos para adicionar um objeto :Produto à lista de Produtos 
  //(2 métodos, consertar depois)
  public adicionarNomeProduto (nomeProduto: Produto) {
    this.produtos.push(nomeProduto);
  }

  public adicionarPrecoProduto(precoProduto:Produto) {
    this.produtos.push(precoProduto);
  }

  // Métodos para remover determinado registo da lista de Produtos
  public removerProduto(produto: Produto) {
    const index = this.produtos.indexOf(produto);
    if(index !== null ) {
      this.produtos.splice(index, 1);
    } else if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }

  // Métodos para alterar o registo da lista de Produtos
  public update(nomeAntigo: Produto, novoNome: Produto) {
    const index = this.produtos.indexOf(nomeAntigo);
    this.produtos.splice(index, 1, novoNome);
  }
}
