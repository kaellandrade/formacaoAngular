import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Cep } from '../interfaces/cep';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @Input()
  public cepData: Cep = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
    erro: false,
  };

  constructor(
    private router: Router,
    private serviceConsultarCep: ConsultaCepService,
  ) {}

  public cadastrar(form: NgForm): void {
    console.warn(form.controls);
    if (form.valid) {
      this.router.navigate(['./sucesso']);
      return;
    }
    alert('Formulário inválido!');
  }

  public consultarCep(form: NgForm) {
    if (form?.controls?.['cep'].valid) {
      this.cepData.cep = form.value['cep'];

      this.serviceConsultarCep
        .consultarCep(this.cepData.cep)
        .subscribe((dado) => {
          if (dado.erro) {
            this.limparCep();
            return;
          }
          this.cepData = <Cep>dado;
        });
    }
  }
  private limparCep(): void {
    this.cepData = {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: '',
      erro: false,
    };
  }
}
