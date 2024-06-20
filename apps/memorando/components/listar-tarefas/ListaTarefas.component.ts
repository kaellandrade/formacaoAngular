import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import {
  checkRemoveTrigger,
  checkStateTrigger,
  filterTrigger,
  formButtonTrigger,
  highlightedStateEditTrigger,
  highlightedStateTrigger,
  listStateTrigger,
  shakeTrigger,
  showCardTrigger,
  showMsgTrigger,
  showStateTrigger,
} from '../../animations/animations';
import { Tarefa } from '../../interface/tarefa';
import { TarefaService } from '../../service/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './ListaTarefas.component.html',
  styleUrl: './ListaTarefas.component.scss',
  animations: [
    highlightedStateTrigger,
    showStateTrigger,
    checkStateTrigger,
    showCardTrigger,
    checkRemoveTrigger,
    highlightedStateEditTrigger,
    filterTrigger,
    formButtonTrigger,
    shakeTrigger,
    listStateTrigger,
    showMsgTrigger,
  ],
})
export class ListaTarefasComponent implements OnInit {
  tarefasSubscription: Subscription;
  listaTarefas: Tarefa[] = [];
  formAberto = false;
  categoria = '';
  validado = false;
  indexTarefa = -1;
  removeClick = -1;
  editClick = -1;
  campoBusca = '';
  tarefasFiltradas: Tarefa[] = [];

  formulario: FormGroup = this.fomBuilder.group({
    id: [0],
    descricao: ['', Validators.required],
    statusFinalizado: [false, Validators.required],
    categoria: ['', Validators.required],
    prioridade: ['', Validators.required],
  });

  constructor(
    private service: TarefaService,
    private fomBuilder: FormBuilder,
  ) {
    this.tarefasSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.service.listar();
    this.tarefasSubscription = this.service.tarefa$.subscribe((tarefas) => {
      this.listaTarefas = tarefas;
      this.tarefasFiltradas = tarefas;
    });
  }

  filtrarTarefasPorDescricao(descricao: string) {
    this.campoBusca = descricao.trim().toLowerCase();
    if (descricao) {
      this.tarefasFiltradas = this.listaTarefas.filter((tarefa) => {
        return tarefa.descricao.toLowerCase().includes(this.campoBusca);
      });
      return;
    }
    this.tarefasFiltradas = this.listaTarefas;
  }

  mostrarOuEsconderFormulario() {
    this.formAberto = !this.formAberto;
    this.resetarFormulario();
  }

  salvarTarefa() {
    if (this.formulario.value.id) {
      this.editarTarefa();
    } else {
      this.criarTarefa();
    }
  }

  criarTarefa() {
    if (this.formulario.valid) {
      const novaTarefa = this.formulario.value;
      this.service.criar(novaTarefa);
      this.resetarFormulario();
    }
  }

  editarTarefa() {
    if (this.formulario.valid) {
      const tarefaEditada = this.formulario.value;
      this.service.editar(tarefaEditada);
      this.resetarFormulario();
    }
  }

  excluirTarefa(tarefa: Tarefa) {
    if (tarefa.id) {
      this.service.excluir(tarefa.id);
    }
  }

  cancelar() {
    this.resetarFormulario();
    this.formAberto = false;
  }

  resetarFormulario() {
    this.formulario.reset({
      descricao: '',
      statusFinalizado: false,
      categoria: '',
      prioridade: '',
    });
  }

  carregarParaEditar(id: number) {
    this.service.buscarPorId(id!).subscribe((tarefa) => {
      this.formulario = this.fomBuilder.group({
        id: [tarefa.id],
        descricao: [tarefa.descricao],
        categoria: [tarefa.categoria],
        statusFinalizado: [tarefa.statusFinalizado],
        prioridade: [tarefa.prioridade],
      });
    });
    this.formAberto = true;
  }

  finalizarTarefa(tarefa: Tarefa) {
    this.service.atualizarStatusTarefa(tarefa);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao-salvar';
    } else return 'botao-desabilitado';
  }

  campoValidado(campoAtual: string): string {
    if (
      this.formulario.get(campoAtual)?.errors &&
      this.formulario.get(campoAtual)?.touched
    ) {
      this.validado = false;
      return 'form-tarefa input-invalido';
    } else {
      this.validado = true;
      return 'form-tarefa';
    }
  }
}
