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
