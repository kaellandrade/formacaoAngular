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

- Utilizar `[attr.aria-invalid]` para oferecer feedback claro sobre a validade dos campos em formulários;
- Integrar o atributo aria-describedby para vincular descrições extras de mensagens de erro a campos específicos;
- Incorporar o atributo aria-disabled em botões para fornecer informações explícitas sobre o estado de desabilitação.

### Acessibilidade em Modais

- Utilizar tecla `esc` para melhorar acessibilidade com auxílio do HostListener;
- Click fora overlay;
- Ajusta foco para o modal;

##### `render2`

> O Renderer2 no Angular desempenha um papel crucial ao facilitar a manipulação segura do DOM, proporcionando uma camada de abstração sobre as operações. Suas principais vantagens incluem a promoção de códigos mais seguros e flexíveis e a prevenção de problemas de segurança e desempenho associados à manipulação direta do DOM.

Entre seus métodos, destacam-se:

- `setStyle`: Utilizado para definir estilos em um elemento DOM, proporcionando uma maneira segura de modificar a apresentação visual.
- `createElement`: Essencial para criar dinamicamente elementos DOM, oferecendo flexibilidade na construção de interfaces interativas.
- `createText`: Permite a criação de nós de texto, contribuindo para a manipulação de conteúdo textual em tempo de execução.
- `appendChild e removeChild`: Essenciais para adicionar e remover elementos filhos, controlando a estrutura do DOM de maneira segura.
- `setAttribute`: Utilizado para definir atributos em elementos, possibilitando a configuração dinâmica de propriedades.
- `addClass e removeClass`: Contribuem para a adição e remoção de classes, permitindo a manipulação de estilos de forma modular.

> Ao aplicar o Renderer2 em cenários práticos, é essencial seguir boas práticas, como preferir métodos específicos da classe em vez de manipulação direta, contribuindo para a manutenção e escalabilidade do código Angular. Além disso, a reflexão sobre como o Renderer2 contribui para a acessibilidade e responsividade destaca sua importância em projetos web modernos, onde a compatibilidade e a segurança são cruciais.

### Fornecendo feedback auditivos

> Fornecer feedback auditivos é importante para auxiliar a jornada dos usuários cegos ou que possuem baixa visão.

- [liveannouncer](https://material.angular.io/cdk/a11y/overview#liveannouncer)
