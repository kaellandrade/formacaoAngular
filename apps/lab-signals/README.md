## Label Signals NOTES

Os sinais do Angular (Angular signals) são valores reativos, que tecnicamente são funções sem argumentos `[(()=> T)]`, que
ao serem executadas, retornam um valore. Podemos assumir que um signal é um tipo especial de dado que pode ser observado
para mudanças.

Isso posto, há dois tipos de signals no Angular: graváveis(writable signal) e computados (computed signals)

#### WritableSignal

Os sinais graváveis armazenam dados e, em posse desses dados armazenados podemos chamar funções para gerenciar (update, set) e ler esses dados.

#### Computed signal

Já os sinais computados, por sua vez, recebem o que foi armazenado pelo sinal gravável e atualizam as informações
na tela, ou realizam alguma lógica (computa) especifica quando esse signal gravável for alterado.

[Artigo](https://www.alura.com.br/artigos/entendendo-signals-angular)

---

Para construir aplicações rápidas e fluidas, há técnicas importantes – como lazy evaluation e cache.

Lazy evaluation é uma técnica que significa "adiar o cálculo até que seja realmente necessário". O que isso significa?

No contexto do Angular, o lazy evaluation ocorre automaticamente com sinais computados criados com computed().
