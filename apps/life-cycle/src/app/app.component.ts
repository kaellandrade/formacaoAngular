import { Component, DoCheck, Input, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';

import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  @Input() readOnly = false;
  listaCompra!: Item[];
  editItem!: Item;

  constructor(
    private listaService: ListaDeCompraService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngDoCheck(): void {
    this.listaService.persistirNoLocalStorage();
  }

  ngOnInit(): void {
    this.listaCompra = this.listaService.getListaDeCompra();
    this.primengConfig.ripple = true;
  }

  editarItem(item: Item) {
    this.editItem = { ...item };
  }

  desbloquear() {
    this.readOnly = false;
  }

  bloquearItens() {
    this.readOnly = true;
  }

  deleteItem(idItem: number) {
    this.confirmationService.confirm({
      message: `Deseja realmente deletar a tarefa</b> ?`,
      header: 'Deletar tarefa',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Não',
      accept: () => {
        this.listaService.deletarItem(idItem);
        this.messageService.add({
          severity: 'info',
          summary: 'Tudo certo!',
          detail: 'Tarefa foi deletada!',
        });
      },
    });
  }

  apagarTudo() {
    this.confirmationService.confirm({
      message: `Deseja realmente deletar <b>${this.listaCompra.length} itens</b> ?`,
      header: 'Deletar tudo',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Não',
      accept: () => {
        this.listaService.deletarTodaLista();
        this.messageService.add({
          severity: 'info',
          summary: 'Tudo certo!',
          detail: 'Todas suas tarefas foram deletadas!',
        });
      },
    });
  }
}
