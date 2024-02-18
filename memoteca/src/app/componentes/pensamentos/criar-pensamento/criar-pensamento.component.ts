import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../validators/CustomValidators';
import { EnumsValidators } from '../../../validators/EnumsValidators';
import { ValidatorEnums } from '../ValidatorEnums';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  protected readonly I18n = ValidatorEnums;
  public modeloscards = ModelosPensamentos;
  protected readonly ValidatorEnums = ValidatorEnums;

  formulario: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.formulario = new FormGroup({});
  }

  criarPensamento(): void {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']).then(r => {
          alert('Pensamento criado com sucesso!');
        });
      });
    }
  }

  cancelarPensamento(): void {
    this.router.navigate(['/listarPensamento']).then(r => {
    });
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          CustomValidators.campoPreenchidoSoComEspacos(),
        ]),
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
    });
  }

  public toogleBotao(): string {
    return this.formulario.valid ? 'botao':'botao__desabilitado';
  }

  public isValidValueAutoria(): boolean {
    const autoria = this.formulario.get('autoria');
    if (autoria?.value) {
      return Boolean(autoria?.errors?.[EnumsValidators.APENAS_MINUSCULAS] && this.formulario.get('autoria')?.touched);
    }
    return false;
  }

}
