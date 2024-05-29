import { Component, DoCheck, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  listaCompra!: Item[];
  editItem!: Item;
  @Input() readOnly = false;


  constructor(
    private listaService: ListaDeCompraService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

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

  desbloquear(){
    this.readOnly = false;
  }

  bloquearItens() {
    this.readOnly = true;
  }


  deleteItem(idItem: number) {
    this.listaService.deletarItem(idItem);
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
          detail: 'Todas suas tarefas foram deletadas!'
        });
      }
    });
  }
}
