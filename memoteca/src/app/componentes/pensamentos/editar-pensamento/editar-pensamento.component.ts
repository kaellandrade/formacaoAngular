import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../validators/CustomValidators';
import { EnumsValidators } from '../../../validators/EnumsValidators';
import { ValidatorEnums } from '../ValidatorEnums';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss'],
})
export class EditarPensamentoComponent implements OnInit {
  formularioEditar: FormGroup;
  public modeloscards = ModelosPensamentos;
  protected readonly ValidatorEnums = ValidatorEnums;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.formularioEditar = new FormGroup({});
  }

  editarPensamento(): void {
    let pensamento: Pensamento = {
      conteudo: this.formularioEditar.get('conteudo')?.value,
      modelo: this.formularioEditar.get('modelo')?.value,
      autoria: this.formularioEditar.get('autoria')?.value,
      id: this.formularioEditar.get('id')?.value,
    };
    this.service.editar(pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']).then(r => {
      });
    });
  }

  public cancelarEdicao(): void {
    this.router.navigate(['/listarPensamento']).then(r => {
    });
  }

  public ngOnInit(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));

    // TODO: melhor colocar um modal indicando o loading dos dados.
    this.iniciarlizarFormulario({
      id: '',
      modelo: ModelosPensamentos.MODELO1,
      autoria: 'Carregando autor...',
      conteudo: 'Carregando pensamento...',
    });
    if (id) {
      this.service.buscarPorId(id).subscribe(pensamento => {
        this.iniciarlizarFormulario(pensamento);
      });
    }
  }

  private iniciarlizarFormulario(pensamento: Pensamento): void {
    this.formularioEditar = new FormGroup({
      conteudo: new FormControl(pensamento.conteudo, Validators.compose([CustomValidators.campoPreenchidoSoComEspacos()])),
      autoria: new FormControl(pensamento.autoria, Validators.compose([
        Validators.required,
        Validators.minLength(ValidatorEnums.LENGTH_AUTORIA),
        CustomValidators.apenasMinusculas()])),
      modelo: new FormControl(pensamento.modelo),
      id: new FormControl(pensamento.id),
    });
  }

  public toogleBotao(): string {
    return this.formularioEditar.valid ? 'botao':'botao__desabilitado';
  }

  public isValidValueAutoria(): boolean {
    const autoria = this.formularioEditar.get('autoria');
    if (autoria?.value) {
      return Boolean(autoria?.errors?.[EnumsValidators.APENAS_MINUSCULAS]);
    }
    return false;
  }
}
