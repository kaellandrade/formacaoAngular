import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Item } from '../../interfaces/iItem';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnChanges, AfterViewInit {
  @ViewChild('inputTarefa') inputTarefa: ElementRef;
  @Output() desbloquear = new EventEmitter();
  @Input() editItem!: Item;
  editando = false;
  textoBtn = 'Salvar';

  valorItem!: string;
  disabled = true;

  constructor(
    private listaCompraService: ListaDeCompraService,
    private messageService: MessageService,
  ) {}

  ngAfterViewInit() {
    this.focusInput();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setupEdit(changes);
  }

  handleSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if (!this.editando) {
      this.adicionarItem();

      return;
    }
    this.atualizarItem();
  }

  public focusInput(): void {
    this.inputTarefa.nativeElement.focus();
  }

  public abortEdit(): void {
    this.editando = false;
    this.limparCampo();
    this.textoBtn = 'Salvar';
    this.desbloquear.emit();
  }

  private atualizarItem(): void {
    this.listaCompraService.atualizarItemInLoco(this.editItem, this.valorItem);
    this.messageService.add({
      severity: 'info',
      summary: 'Tudo certo!',
      detail: 'Tarefa foi editada!',
    });

    this.setupBtnSubmit();
    this.limparCampo();
    this.focusInput();
    this.desbloquear.emit();
  }

  private adicionarItem(): void {
    this.listaCompraService.adicionarItemLista(this.valorItem);
    this.limparCampo();
    this.setupBtnSubmit();
    this.focusInput();
    this.messageService.add({
      severity: 'success',
      summary: 'Tudo certo!',
      detail: 'Tarefa foi cadastrada!',
    });
  }

  private limparCampo(): void {
    this.valorItem = '';
  }

  private setupEdit(changes: SimpleChanges): void {
    if (!changes['editItem'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Atualizar';
      this.valorItem = this.editItem?.nome;
    }
  }

  private setupBtnSubmit(): void {
    this.editando = false;
    this.textoBtn = 'Salvar';
  }
}
