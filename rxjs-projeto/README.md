# Executando o projeto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Requisitos

- Node;
- Angular

## Development server

Execute `npm start` para rodar o serve do Angular. Aplicação será iniciada em `http://localhost:4200/`.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<details>
<summary>Anotações </summary>

# Programação reativa
A programação reativa é um termo bastante conhecido que não está necessariamente vinculado ao um framework front-end (que é o caso do Angular).
Ela pode ser utilizada tanto no Fron-end quanto no Back-End, a pesar de ser um termo polêmico e possuir várias definições podemos dizer que é uma paradigma
de programação ou modelo de arquitetura que se refere à manipulação de fluxo de dados (strems) ou eventos de forma assíncrona. Ou seja, se existe assincronismo existe programação reativa por trás.
Existe um padrão de mercado muito popular que é o [ReactiveX](https://reactivex.io/).

O padrão Observer é a base da programação reativa. Algumas literaturas nomeia esse padrão de Pub/Sub  (Publish/Subscribe)

## RxJS
RxJS é uma biblioteca que utiliza o modelo ReactiveX no JavaScript/TypeScript, essa lib é amplamente utilizada em Framworks Front-end como o Angular, por exemplo.

## Observable
Coleção de valores ou uma coleção de eventos futuros.

## Observer
Ideia de uma coleção de callback, consegue ouvir os valores entregues, mas para isso precisa se escrever nos Observables.


## Subscribre e Unsubscribe

```Typescript
	.subscribe({
				next: retornoAPI => console.log(retornoAPI),
				error: error => console.error(error), // Encerra o ciclo de vida do Observlable (complete não será chamado, coso exista o error)
				complete: () => console.log('Observable completado!'),
	});
```
O `subscribe` retorna um objeto do tipo `Subscription`que pode ser utilizado para desinscrição e liberação de recuros evitando *memory leak*

## Operadores RxJS

`Pipe`- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

`Tap` - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

`Map` - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.


## Pipes Angular

Os pipes são formas de transformar valores. Por exemplo, para utilizar o pipe usamos o operado `|` em nosso template.
No exemplo logo a baixo mostramos uma data formatada por meio do pipe `date`.
`<p class="resultado">{{ livro.publishedDate | date: 'dd/MM/yyyy' }}</p>`
Há diversos outros pipes prontos que podem ser consultado na doc do Angular. 
Mas também podemos criar nossos próprios pipes! 

## Criando nosso pipes
A seguir estamos criando um pipe que dado uma listra de autores de determinado exemplar, será retornado apenas o primeiro autor.
```Typescript
// Criando o pipe autoria
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'autoria',
})
export class AutoriaPipe implements PipeTransform {
	transform(autoria: string[]): string {
		if (autoria) {
			return autoria[0];
		}
		return '';
	}
}
```

```HTML
<!-- Utilizando pipe autoria-->
<p class="resultado">{{ livro.authors | autoria }}</p>

```
Além disso podemos encadiar pipes, exemplo: `<p class="resultado">{{ livro.authors | autoria | slice: 0 : 2 }}</p>` estamos limitando o nome do autor apenas a dois char.

</details>

## Telas
