import { Component, Input, input, OnInit } from '@angular/core';

import { IdiomaLivro, Livro } from '../../models/interfaces';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
})
export class LivroComponent implements OnInit {
  @Input() livro: Livro;
  @Input() isCountrySuported = false;
  @Input() index!: number;

  modalAberto = false;

  ngOnInit(): void {
    this.isCountrySuported = Object.values(IdiomaLivro).includes(
      this.livro.language,
    );
  }

  onModalChange(evento: boolean): void {
    this.modalAberto = evento;
  }
}
