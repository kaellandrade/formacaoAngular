import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  valorItem!: string;
  disabled = true;

  constructor(private listaCompraService: ListaDeCompraService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('this.valorItem');
  }

  ngOnInit(): void {
    console.log('onInit');
  }
  adicionarItem(form: NgForm) {
    if (form.valid) {
      console.log(this.valorItem);
      this.listaCompraService.adicionarItemLista(this.valorItem);
    }
  }
}
