import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { CustomValidators } from '../../../validators/CustomValidators';
import { EnumsValidators } from '../../../validators/EnumsValidators';
import { PensamentoService } from '../pensamento.service';
import { ValidatorEnums } from '../ValidatorEnums';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss'],
})
export class EditarPensamentoComponent implements OnInit {
  private static readonly TIME_LIFE_MESSAGE = 3000;
  public modeloscards = ModelosPensamentos;
  formularioEditar: FormGroup;
  public loading = false;
  protected readonly I18n = ValidatorEnums;
  protected readonly ValidatorEnums = ValidatorEnums;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {
    this.formularioEditar = new FormGroup({});
  }

  editarPensamento(): void {
    this.loading = true;
    const pensamento: Pensamento = {
      conteudo: this.formularioEditar.get('conteudo')?.value,
      modelo: this.formularioEditar.get('modelo')?.value,
      autoria: this.formularioEditar.get('autoria')?.value,
      id: this.formularioEditar.get('id')?.value,
      favorito: this.formularioEditar.get('favorito')?.value,
    };
    this.service
      .editar(pensamento)
      .pipe()
      .subscribe({
        next: () => {
          this.mostrarMensagemSucessoEdicao();
          this.navegarParaTelaInicial();
        },
        error: () => (this.loading = false),
      });
  }

  public toogleBotao(): string {
    return this.formularioEditar.valid ? 'botao' : 'botao__desabilitado';
  }

  public isValidValueAutoria(): boolean {
    const autoria = this.formularioEditar.get('autoria');
    if (autoria?.value) {
      return Boolean(autoria?.errors?.[EnumsValidators.APENAS_MINUSCULAS]);
    }
    return false;
  }

  public cancelarEdicao(): void {
    this.router.navigate(['/listarPensamento']).then(() => false);
  }

  public ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.iniciarlizarFormulario({
      id: '',
      modelo: ModelosPensamentos.MODELO1,
      autoria: 'Carregando autor...',
      conteudo: 'Carregando pensamento...',
      favorito: false,
    });
    if (id) {
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.iniciarlizarFormulario(pensamento);
      });
    }
  }

  private iniciarlizarFormulario(pensamento: Pensamento): void {
    this.formularioEditar = new FormGroup({
      conteudo: new FormControl(
        pensamento.conteudo,
        Validators.compose([CustomValidators.campoPreenchidoSoComEspacos()]),
      ),
      autoria: new FormControl(
        pensamento.autoria,
        Validators.compose([
          Validators.required,
          Validators.minLength(ValidatorEnums.LENGTH_AUTORIA),
          CustomValidators.apenasMinusculas(),
        ]),
      ),
      modelo: new FormControl(pensamento.modelo),
      id: new FormControl(pensamento.id),
      favorito: new FormControl(pensamento.favorito),
    });
  }

  private mostrarMensagemSucessoEdicao() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail:
        'Pensamento editado com sucesso, redirecionando para tela inicial!',
    });
  }

  private navegarParaTelaInicial(): void {
    setTimeout(() => {
      this.router.navigate(['/listarPensamento']).then(() => true);
    }, EditarPensamentoComponent.TIME_LIFE_MESSAGE);
  }
}
