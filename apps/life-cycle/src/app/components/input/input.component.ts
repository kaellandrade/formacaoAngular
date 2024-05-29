import {
  AfterViewInit,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
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
export class InputComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('inputTarefa') inputTarefa: ElementRef;
  @Input() editItem!: Item;
  @Input()
  editando = false;
  textoBtn = 'Salvar';

  valorItem!: string;
  disabled = true;

  constructor(private listaCompraService: ListaDeCompraService) {
  }

  ngAfterViewInit() {
    this.focusInput();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setupEdit(changes);
  }

  ngOnInit(): void {
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
      this.textoBtn = 'Atualizar item';
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

}
