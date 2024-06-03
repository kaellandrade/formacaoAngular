import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
  private static readonly TAMANHO_MAXIMO_STRING = 256;
  private static readonly TIME_LIFE_MESSAGE = 3000;
  @Input()
  public pensamento: Pensamento;
  @Input()
  public listaFavoritos: Pensamento[] = [];

  @Output()
  public atualizarPensamento = new EventEmitter();

  constructor(
    private service: PensamentoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
    this.pensamento = {
      id: '0',
      conteudo: '',
      modelo: ModelosPensamentos.MODELO1,
      autoria: '',
      favorito: false,
    };
  }

  ngOnInit(): void {
    return;
  }

  public larguraPensamento(): string {
    if (
      this.pensamento.conteudo.length >=
      PensamentoComponent.TAMANHO_MAXIMO_STRING
    ) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public toggleFavoritar(): void {
    const pensamento: Pensamento = {
      ...this.pensamento,
      favorito: !this.pensamento.favorito,
    };

    this.service.editar(pensamento).subscribe((pensamentoAtualizado) => {
      if (pensamentoAtualizado.favorito === pensamento.favorito) {
        this.pensamento.favorito = pensamentoAtualizado.favorito;
        this.listaFavoritos.splice(
          this.listaFavoritos.indexOf(this.pensamento),
          1,
        );
      }
    });
  }

  public deleteThought(id: string): void {
    this.service.excluir(id).subscribe({
      next: () => {
        this.showMensageThoughtDeleted();
        this.atualizarPensamento.emit();
      },
      error: () => {
        this.showMensageThoughtNotDeleted();
      },
    });
  }

  public getSrcFavoritoImgIcon(): string {
    if (this.pensamento.favorito) {
      return 'pi pi-heart-fill';
    }
    return 'pi pi-heart';
  }

  showModalDeleteThought(id: string): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja remover o pensamento <b>${this.pensamento.autoria}</b> ?`,
      header: 'Confirmar remoção',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.deleteThought(id);
      },
    });
  }

  private showMensageThoughtDeleted(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Excluído!',
      detail: 'Pensamento excluído',
      life: PensamentoComponent.TIME_LIFE_MESSAGE,
    });
  }

  private showMensageThoughtNotDeleted() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Não excluído!',
      detail: 'Não foi possível excluir o pensamento, tente mais tarde!',
      life: PensamentoComponent.TIME_LIFE_MESSAGE,
    });
  }
}
