import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { CustomValidators } from '../../../validators/CustomValidators';
import { EnumsValidators } from '../../../validators/EnumsValidators';
import { PensamentoService } from '../pensamento.service';
import { ValidatorEnums } from '../ValidatorEnums';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  private static readonly TIME_LIFE_MESSAGE = 3000;
  public modeloscards = ModelosPensamentos;
  formulario: FormGroup;
  isLoading = false;

  protected readonly addEventListener = addEventListener;
  protected readonly I18n = ValidatorEnums;
  protected readonly ValidatorEnums = ValidatorEnums;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
    this.formulario = new FormGroup({});
  }

  criarPensamento(): void {
    this.isLoading = true;
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe({
        next: () => {
          this.navegarParalistarPensamentos();
          this.mostrarMensagemSucessoCadastro();
        },
        error: () => (this.isLoading = false),
      });
    }
  }

  cancelarPensamento(): void {
    this.router.navigate(['/listarPensamento']).then(() => true);
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([CustomValidators.campoPreenchidoSoComEspacos()]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(ValidatorEnums.LENGTH_AUTORIA),
          CustomValidators.apenasMinusculas(),
        ]),
      ],
      modelo: [ModelosPensamentos.MODELO1],
      favorito: false,
    });
  }

  public toogleBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }

  public isValidValueAutoria(): boolean {
    const autoria = this.formulario.get('autoria');
    if (autoria?.value) {
      return Boolean(
        autoria?.errors?.[EnumsValidators.APENAS_MINUSCULAS] &&
          this.formulario.get('autoria')?.touched,
      );
    }
    return false;
  }

  private mostrarMensagemSucessoCadastro() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail:
        'Pensamento cadastrado com sucesso, redirecionando para tela inicial!',
    });
  }

  private navegarParalistarPensamentos() {
    setTimeout(() => {
      this.router.navigate(['/listarPensamento']).then(() => true);
    }, CriarPensamentoComponent.TIME_LIFE_MESSAGE);
  }
}
