## Anotações

### Acessibilidade

### Acessibilidade no roteamento

- Adicionar `title` as rotas não só melhoram a acessibilidade como também o SEO;
- [RouterLinkActive](https://angular.dev/best-practices/a11y#active-links-identification) -- Para adicionar estilo no link da página selecionada;
- `routerLinkActive` para auxiliar em tecnologias assistivas configurando o valor do atributo aria-current nos links ativos, fornecendo uma indicação acessível da página atual;
- `aria-label` para elementos que não contém conteúdo visivel, ou que te contém mas queremos adicionar mais detalhes;
- Bindings de atributos com `attr.`.
- HTML semântico;

#### [Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

> O atributo role no HTML desempenha um papel vital na estrutura semântica das páginas, fornecendo informações essenciais sobre o propósito de cada elemento.

- `role="region"` conteúdo separado da página.
- `role="radiogroup"`

#### Acessibilidade em forms Angular.
