# Executando o projeto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Requisitos

- Node;
- Angular

## Development server

Execute `ng serve` para rodar o serve do Angular. Vá para `http://localhost:4200/`.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<details>
  <summary>Anotações </summary>
  Basicamente o Angular possui duas formas de trabalhar com formulário e validá-los, são:

- [Template Drive](https://angular.io/guide/forms#building-a-template-driven-form);

  - Todo implementado no template do componente;
  - Necessário o módulo `FormsModule`;
  - É assíncrono;

- Data Driven ou Reactive Forms

  - Lógica fica do lado do componente;
  - Utiliza o `ReactiveFormsModule`;
  - É síncrono,
  - [Artigo Alura](https://www.alura.com.br/artigos/como-aplicar-validacao-formularios-reativos-angular)

- Exemplo de ambos

  [Formulário 1 (Exemplo app cadastro): Formulário Template-Driven](./src/app/cadastro/cadastro.component.html)

  Este é um exemplo de um formulário Template-Driven. Neste tipo de formulário, a lógica é baseada no template, não na classe do componente. Aqui estão alguns pontos-chave:

  - `#f="ngForm"`: Isso cria uma referência local para o formulário.
  - `(ngSubmit)="cadastrar(f)"`: Isso liga o evento de submissão do formulário à função `cadastrar()`, passando o formulário como argumento.
  - `ngModel`: Isso cria uma ligação bidirecional entre o campo do formulário e a propriedade do componente.
  - `required` e `minlength`: São validadores que garantem que o campo é preenchido e tem um comprimento mínimo.

  [Formulário 2 (Exemplo Memoteca app): Formulário Reativo](../memoteca/src/app/componentes/pensamentos/criar-pensamento/criar-pensamento.component.html)

  Este é um exemplo de um formulário Reativo. Neste tipo de formulário, a lógica é baseada na classe do componente. Aqui estão alguns pontos-chave:

  - `[formGroup]="formulario"`: Isso associa o formulário HTML ao FormGroup `formulario` definido na classe do componente.
  - `formControlName="autoria"`: Isso liga o campo de entrada ao FormControl chamado `autoria` dentro do FormGroup.

  Em resumo, os formulários Template-Driven são úteis para cenários simples e os formulários Reativos oferecem mais flexibilidade e são mais adequados para cenários complexos.

  </details>
