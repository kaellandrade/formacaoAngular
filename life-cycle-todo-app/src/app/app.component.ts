import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listaCompra!: Item[];

  constructor(private listaSercice: ListaDeCompraService) {}
  ngOnInit(): void {
    this.listaCompra = this.listaSercice.getListaDeCompra();
    console.log(this.listaCompra);
  }
}
