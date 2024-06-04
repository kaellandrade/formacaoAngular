import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './Mensagem.component.html',
  styleUrl: './Mensagem.component.scss',
})
export class MensagemComponent {
  @Input() mensagemValidacao = '';
}
