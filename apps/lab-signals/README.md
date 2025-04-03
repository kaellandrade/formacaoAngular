## Label Signals NOTES

Os sinais do Angular (Angular signals) são valores reativos, que tecnicamente são funções sem argumentos `[(()=> T)]`,
que
ao serem executadas, retornam um valore. Podemos assumir que um signal é um tipo especial de dado observável
para mudanças.

Isso posto, há dois tipos de signals no Angular: graváveis(writable signal) e computados (computed signals)

#### WritableSignal

Os sinais graváveis armazenam dados e, em posse desses dados armazenados podemos chamar funções para gerenciar (update,
set) e ler esses dados.

#### Computed signal

Já os sinais computados, por sua vez, recebem o que foi armazenado pelo sinal gravável e atualizam as informações
na tela, ou realizam alguma lógica (computa) especifica quando esse signal gravável for alterado.

[Artigo](https://www.alura.com.br/artigos/entendendo-signals-angular)

---

Para construir aplicações rápidas e fluidas, há técnicas importantes – como lazy evaluation e cache.

Lazy evaluation é uma técnica que significa "adiar o cálculo até que seja realmente necessário". O que isso significa?

No contexto do Angular, o lazy evaluation ocorre automaticamente com sinais computados criados com computed().

---

Quando estamos trabalhando com signals e utilizamos o computted ou effect e tentarmos atualizar um valor de um signal
writeble dentro
desse contexto, recebemos a seguinte mensagem:

> ERROR RuntimeError: NG0600: Writing to signals is not allowed in a `computed` or an `effect` by default. Use
> `allowSignalWrites` in the `CreateEffectOptions` to enable this inside effects.

Isso acontece porque por padrão o Angular deseja evitar que efeitos colaterais indesejados. Porém, como o próprio erro
sugere, basta ativar a flag `allowSignalWrites`

---

#### Untracked

Utilizado para evitarmos dependências desnecessárias. Por exemplo, suponha que temos dois signals
`A` e `B` podemos dizer que não queremos rastrear o valor do signal `B` mas apenas do `A`

```typescript
import { untracked } from '@angular/core';

const a = signal(0);
const b = signal(1);

effect(() => {
  console.log(
    a(),
    untracked(() => b()),
  ); // evita re-evaluated B
});
```

Podemos ter algo mais complexo, por exemplo:

```typescript
effect(() => {
  // ...read signals...
  const a = a();

  untracked(() => {
    this.someMethodThatReadsSignals(a); // quaalquer signal lido aqui não será dependencia do effect, melhorando a performance do código
  });
});
```

[Para saber mais](https://medium.com/netanelbasal/angular-signals-preventing-unnecessary-dependencies-using-the-untrack-function-15a4c03b03fe)
