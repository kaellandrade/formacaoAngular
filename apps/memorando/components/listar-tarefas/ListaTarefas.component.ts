import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  checkStateTrigger,
  highlightedStateTrigger,
  showStateTrigger,
} from '../../animations/animations';
import { Tarefa } from '../../interface/tarefa';
import { TarefaService } from '../../service/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './ListaTarefas.component.html',
  styleUrl: './ListaTarefas.component.scss',
  animations: [highlightedStateTrigger, showStateTrigger, checkStateTrigger],
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  formAberto = false;
  categoria = '';
  validado = false;
  indexTarefa = -1;

  formulario: FormGroup = this.fomBuilder.group({
    id: [0],
    descricao: ['', Validators.required],
    statusFinalizado: [false, Validators.required],
    categoria: ['', Validators.required],
    prioridade: ['', Validators.required],
  });

  constructor(
    private service: TarefaService,
    private router: Router,
    private fomBuilder: FormBuilder,
  ) {}

  ngOnInit(): Tarefa[] {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
    return this.listaTarefas;
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

  editarTarefa() {
    this.service.editar(this.formulario.value).subscribe({
      complete: () => this.atualizarComponente(),
    });
  }

  criarTarefa() {
    this.service.criar(this.formulario.value).subscribe({
      complete: () => this.atualizarComponente(),
    });
  }

  excluirTarefa(id: number) {
    if (id) {
      this.service.excluir(id).subscribe({
        complete: () => this.recarregarComponente(),
      });
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

  recarregarComponente() {
    this.router.navigate(['/listaTarefas']);
  }

  atualizarComponente() {
    this.recarregarComponente();
    this.resetarFormulario();
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

  finalizarTarefa(id: number) {
    this.service.buscarPorId(id!).subscribe((tarefa) => {
      this.service.atualizarStatusTarefa(tarefa).subscribe(() => {
        this.listarAposCheck();
      });
    });
  }

  listarAposCheck() {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
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