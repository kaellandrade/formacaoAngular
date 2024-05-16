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

## DoCheck

- Chamado quando todas as alterações do componente além das props de entrada;
- Detecta alterações dos componentes filhos também;
- Usar com parcimônia, pois pode causar problemas de performance.

## OnDestroy

> O hook OnDestroy é chamado quando o componente é destruído pelo Angular. Aqui,devemos cancelar a chamada HTTP em andamento, para evitar problemas de memória (**Memory Leak**) ou outras questões de performance.

É muito utilizado para limpar os rastros de um componente, ou seja, para realizar lógicas de limpeza. Um exemplo de lógica de limpeza é cancelar assinatura de inscrições do Observable para liberar memória para evitar **Memory Leak** (Vazamento de memória).

Um vazamento de memória (do Inglês memory leak) ocorre quando o programa não libera para o sistema operacional memória que não é mais utilizada. Um problema que surge diretamente do gerenciamento incorreto da alocação dinâmica.

Isso é muito comum em programas de linguagem que não possui recursos de gerenciamento de memória automático, como C, por exemplo.

## Sobre outros Hooks

- `AfterViewInit`:
  Este hook é acionado após a visualização do componente ser totalmente inicializada. É útil para realizar ações específicas relacionadas à visualização, como manipulações no DOM ou integrações com bibliotecas externas.

- `AfterViewChecked`:
  Ativado após cada verificação da visualização do componente, permitindo a execução de ações adicionais nesse momento específico do ciclo de vida.

- `AfterContentInit`:
  Executado após a inicialização do conteúdo do componente. É útil quando operações dependem do conteúdo projetado no componente.

- `AfterContentChecked`:
  Ativado após cada verificação do conteúdo do componente, proporcionando oportunidades para ações adicionais relacionadas ao conteúdo.
