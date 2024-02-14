import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  public modeloscards = ModelosPensamentos;

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ModelosPensamentos.MODELO3,
  };

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']).then(r => {
        alert('Pensamento criado com sucesso!');
      });
    });
  }

  cancelarPensamento(): void {
    this.router.navigate(['/listarPensamento']).then(r => {});
  }

  ngOnInit(): void {
  }
}
