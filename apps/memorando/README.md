## Notações

- `query`
  Encontra um ou mais elementos internos no elemento atual que está sendo animado em uma sequência.
- `group`
  Define uma lita de animações que serão executadas em paralelo.

Veja um exemplo de ambos:

```typescript
 transition('valid => invalid', [
    query('#botao-salvar', [ // Busca por esse id (filho) dentro do compoenente que está com decorador de animação
      group([
        animate(
          200,
          style({
            backgroundColor: '#6C757D',
          }),
        ),
        animate(
          100,
          style({
            transform: 'scale(1.1)',
          }),
        ),
      ]),
      animate(
        200,
        style({
          transform: 'scale(1)',
        }),
      ),
    ]),
  ]),
```

Pode acontecer de o Angular lançar erros ao tentar Animar um elemento que ainda não foi renderizado na DOM. Para isso podemos utiliza o `{optional:true}`.

## BehaviorSubject

O [BehaviorSubject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject) pode ser utilizado para emetir o valor atual e manter uma lista de seus
'observadores', o que permite que o estado seja facilmente compartilhado.

Conforme a doc do RXjs exemplifica, pense no BehaviorSubject como um placar de um jogo de futebol. Se você começar assistir o jogo no segundo tempo você
consegue saber o estado corrente do placar.

O BehavioSubject precisa de um valor inicial em sua instanciação. Retornando ao caso do jogo o placar seria 0-0 assim que o jogo inciar.

> Concluindo, se você precisa garantir que os assinantes sempre obtenham o valor mais recente após a assinatura, ou se você tem um valor inicial, `BehaviorSubject` é a sua escolha.

> Se você precisar de mais emissões históricas, considere `ReplaySubject`

> E se você não precisa de nenhum histórico, um `Subject` pode ser o que você está procurando.
