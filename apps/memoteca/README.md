## Anotações

Quando queremos aplicar animações em elementos que estão sendo renderizados de forma condicional, utilizando a diretiva *ngIf ou renderizando listas com a diretiva *ngFor, por exemplo, utilizamos o estado reservado void. Quando o estado para o qual o elemento será modificado não importa, por não haver mudança no estilo final, podemos utilizar outro estado específico, chamado estado coringa, representado por \* (asterisco).

Exemplos:

```Typescript
export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);
```

```Typescript
export const showStateTrigger = trigger('showState', [
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition('* => void', animate(300, style({
    opacity: 0
  })))
]);
```

trigger() - inicia a animação e serve como um contêiner para todas as outras chamadas de função de animação. O template é vinculado ao nome do trigger, que é declarado como primeiro argumento da função. Usa sintaxe de matriz.

style() - define um ou mais estilos CSS para usar em animações. Controla a aparência visual dos elementos HTML durante as animações. Usa sintaxe de objeto.

state() - cria um conjunto nomeado de estilos CSS que devem ser aplicados na transição bem-sucedida para um determinado estado. O estado pode então ser referenciado pelo nome dentro de outras funções de animação.

animate() - especifica as informações de tempo para uma transição. Valores opcionais para delay e easing function. Pode conter métodos style().

transition() - define a sequência de animação entre dois estados nomeados. Usa sintaxe de matriz.
