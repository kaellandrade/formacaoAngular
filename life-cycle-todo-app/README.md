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
  
> O OnChanges é o primeiro gancho a ser chamado, mas somente quando o componente/diretiva possui propriedades de entrada de dados.

> O que difere o OnInit do OnChanges é que o OnInit é chamado somente uma vez durante toda vida do componente/diretiva, já o OnChanges é chamado sempre que houver mudança nas propriedades de entrada de dados.

## Passagem de informção entre componentes PAI -> FILHO e FILHO -> PAI

Como fizemos, note que o copoente `ITEM` contém um decorator:
`@Output() emitindoItemParaEditar = new EventEmitter();`
e um método:

```TYPESCRIPT
editarItem(): void {
		this.emitindoItemParaEditar.emit(this.item); // Emitindo uma informação
	}
```

Sendo assim, podemos associar um evento de click, por exemplo no item filho que irá chamar o método `editarItem` e esse irá emitir uma informação através do `emit`.
Já no componente pai, podemos utilizar a a prop `output`:
`<app-item (emitindoItemParaEditar)="editarItem($event)" [item]="item"></app-item>`

Que irá chamar o método do editar item do coponente pai, passando item como informação:

```TYPESCRIPT
editarItem(item: Item) {
	this.editItem = item;
}
```

Junto com isso podemos utilizar o `ngOnChanges` para cpatar mudanças de estados.
Verifique a relação dos componentes na hora de editar um _todo_: `item.components.ts (filho)` => `app.component.ts (pais)` => `input.component.ts (filho novamente)`

> Quando vínculamos o evento @Output() à um método do componente pai no template, a propriedade $event é quem irá carregar o dado passado como parâmetro lá dentro do componente filho para o método .emit().

## Style bind

Podemos vincular eventos de classe da seguinte forma:
aplica a classe `line-through` quando `item.comprado` for `true` `[class.line-through]="item.comprado"`

</details>

## Telas
