import { Component, OnInit } from '@angular/core';
import { ModelosPensamentos } from '../../../../enums/ModelosPensamentos';
import { Pensamento } from '../../../../enums/Pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: ModelosPensamentos.MODELO1,
    },
    {
      conteudo: 'Minha prop é decorada com @Input()',
      autoria: 'Compoenente filho',
      modelo: ModelosPensamentos.MODELO2,
    },
    {
      conteudo: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
       unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
       with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      autoria: 'Compoenente filho',
      modelo: ModelosPensamentos.MODELO3,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
