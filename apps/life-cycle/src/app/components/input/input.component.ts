import {
  AfterViewInit,
  Component, ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../interfaces/iItem';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges, AfterViewInit {
  @ViewChild('inputTarefa') inputTarefa: ElementRef;
  @Input() editItem!: Item;
  editando = false;
  textoBtn = 'Salvar';

  valorItem!: string;
  disabled = true;
  @Output() desbloquear = new EventEmitter();

  constructor(private listaCompraService: ListaDeCompraService) {
  }

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

  private atualizarItem(): void {
    this.listaCompraService.atualizarItemInLoco(this.editItem, this.valorItem);
    this.setupBtnSubmit();
    this.limparCampo();
    this.focusInput();
  }

  private adicionarItem(): void {
    this.listaCompraService.adicionarItemLista(this.valorItem);
    this.limparCampo();
    this.setupBtnSubmit();
    this.focusInput();
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


  public focusInput(): void {
    this.inputTarefa.nativeElement.focus();
  }

  public abortEdit(): void {
    this.editando = false;
    this.limparCampo();
    this.textoBtn = 'Salvar';
    this.desbloquear.emit()
  }

}
