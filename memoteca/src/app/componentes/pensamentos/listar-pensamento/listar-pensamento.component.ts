import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: ReadonlyArray<Pensamento> = [];

  constructor(private service: PensamentoService) {}

  /**
   * Ciclo de vida do componente.
   */
  ngOnInit(): void {
    this.service.listar();
    this.service.listar().subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
