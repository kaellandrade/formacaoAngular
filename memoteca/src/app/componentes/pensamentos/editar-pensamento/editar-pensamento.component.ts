import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss'],
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ModelosPensamentos.MODELO3,
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editarPensamento(): void {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']).then(r => {});
    });
  }

  cancelarEdicao(): void {
    this.router.navigate(['/listarPensamento']).then(r => {});
  }

  ngOnInit(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.buscarPorId(id).subscribe(pensamento => {
        this.pensamento = pensamento;
      });
    }
  }
}
