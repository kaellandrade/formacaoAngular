import { Component, DoCheck, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  listaCompra!: Item[];
  editItem!: Item;


  constructor(
    private listaService: ListaDeCompraService,
    private primengConfig: PrimeNGConfig
  ) {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck foi chamado!');
    this.listaService.persistirNoLocalStorage();
  }

  ngOnInit(): void {
    this.listaCompra = this.listaService.getListaDeCompra();
    this.primengConfig.ripple = true;
  }

  editarItem(item: Item) {
    this.editItem = item;
  }

  deleteItem(idItem: number) {
    this.listaService.deletarItem(idItem);
  }

  apagarTudo() {
    const resposta = confirm('Remover todos os itens ?');
    if (resposta) {
      this.listaService.deletarTodaLista();
    }
  }
}
