<p align="center">
  <img width='30%' src=".github/angular.svg" alt="Angular">
</p>

# Formação Angular [Monorepo](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)

O intuito desse monorepo é manter todas as aplicações da [formação Alura Angular](https://cursos.alura.com.br/formacao-angular-14) e outros cursos referente ao framework em um único local e funcional.

Apliquei diversas outras ferramentas/tecnologias que não fazem parte da formação, mas as quais tinha vontade de aprendê-las, tais como:

[![nx](https://img.shields.io/badge/Nx-blue?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
[![PrimeNG](https://img.shields.io/badge/-PrimeNG-3B82F6?style=for-the-badge&logo=angular&logoColor=white)](https://primeng.org/)
[![PrimeFlex](https://img.shields.io/badge/-PrimeFlex-white?style=for-the-badge&logo=angular&logoColor=00DA99)](https://primeflex.org/)
[![Cypress](https://img.shields.io/badge/-Cypress-black?style=for-the-badge&logo=cypress&logoColor=00DA99)](https://www.cypress.io/)
[![Husky](https://img.shields.io/badge/-HookHusky-white?style=for-the-badge&logo=git&logoColor=00DA99)](https://typicode.github.io/husky/)
[![Eslint](https://img.shields.io/badge/-HookHusky-blue?style=for-the-badge&logo=git&logoColor=white)](https://eslint.org/)
[![Jest](https://img.shields.io/badge/-jestJS-white?style=for-the-badge&logo=jest&logoColor=red)](https://jestjs.io/pt-BR/)
[![Jasmine](https://img.shields.io/badge/-Jasmine-white?style=for-the-badge&logo=jasmine&logoColor=red)](https://jasmine.github.io/index.html)

## Setup :gear:

- Instale as dependencias `npm install`;

## Apps (Overview) :movie_camera:

### Buscador de Livos

Aplicação que utiliza a [API pública do Google](https://developers.google.com/books) para busca de livros.

Aqui apliquei técnicas de [FRP(Functional reactive programming)](https://en.wikipedia.org/wiki/Functional_reactive_programming) e como utilizar a lib [RXJS](https://rxjs.dev/) para trabalhar com [streams](https://en.wikipedia.org/wiki/Data_stream) de dados com [observables](https://rxjs.dev/guide/observable) e como combinar observables com os [operadores do RxJS](https://rxjs.dev/api/operators).

Além disso, foi implementado técnicas de [acessibilidade com o Angular](https://angular.dev/best-practices/a11y) basenado-se na [WCAG](https://www.w3.org/TR/WCAG21/) (diretrizes de acessibilidade).

https://github.com/kaellandrade/formacaoAngular/assets/51521476/b22c98f4-73cc-4e67-9eb6-3b776ed124c4

---

### Memoteca

CRUDE simples de memórias e citações.

https://github.com/kaellandrade/formacaoAngular/assets/51521476/f85e3e5a-c7d7-47f5-8674-70389fdf7241

https://github.com/kaellandrade/formacaoAngular/assets/51521476/be29d826-69fd-45a0-9171-9497f4bf7120

---

### TODO APP list

App de lista de tarefas simples para aplicar o conceito de [animações com Angular.](https://angular.dev/guide/animations)

https://github.com/kaellandrade/formacaoAngular/assets/51521476/e0baf578-269d-4f2b-a190-9743edeec21f

---

### Zoop Store

Página simples apenas para praticar os conceitos de testes unitários com Angular. Aqui utilize o jasmine e depois realizei a migração para o JestJS.

- Teste de services;
- Teste de dumb components;
- Teste de smart components;
- Teste de integração;
- Migrando entre test runner Jasmine -> JestJS

---

## Rodando os Apps :hammer_and_wrench:

- [Buscador de Livos](#buscador-de-livos) :book: - `npm run buscante-app`;
- [App Memoteca](#Memoteca) :iphone: - `npm run memoteca-app`;
- [Memorando com animações](#Memorando-TODO-APP-list) :movie_camera: - `npm run memorando`
- [Todo APP](#TODO-APP-list) :white_check_mark: - `npm run todo-app`;
- [Zoop Store](#zoop-store) :white_check_mark: - `npm run zoop-store-test`;

## Rodando os testes e2e de cada projeto com o Cypress:

- [App Memoteca](#memoteca) :iphone: - `npm run memoteca-e2e`;
- [Buscador de Livos](#buscador-de-livos) :book: - `npm run buscante-e2e`;
- [Memorando com animações](#memorando-app) :movie_camera: - `npm run memorando-e2e`
- [Todo APP](#todo-app) :white_check_mark: - `npm run todo-app-e2e`;

<details>
<summary>Mais detalhes sobre essa formação da Alura (Guideline)</summary>

1. Explore as bases do Angular

   Mergulhando no universo do Angular, começando pela criação de aplicações usando a poderosa ferramenta Angular CLI.
   Aprendendo sobre estrutura de componentes e explorando os conceitos fundamentais, tais como templates, diretivas, services e injeção de dependências.
   Aprendendo como fazer a configuração de rotas da aplicação e aproveitando o poder do HTTPClient do Angular para executar operações CRUD no seu back-end.
   Além disso, vi construção de formulários e a aplicação de validações, utilizando as duas abordagens do angular - data driven (formulários reativos) e template driven - proporcionando uma base sólida para sua evolução.

   1. [Angular 14: aplique os conceitos e desenvolva seu primeiro CRU](https://cursos.alura.com.br/course/angular-explorando-framework)D
      1. Router;
      2. ActivatedRoute;
      3. Services com HttpClient;
      4. Injeção de dependências de props;
      5. E algumas diretivas básicas do Angular.
   2. Angular 14: evoluindo a aplicação (Projeto Biblioteca memórias)
      1. Formulários reativos com ReactiveFormsModule, FormGroup;
   3. Formulários orientados a templates (Alura books)

2. Gerencie o ciclo de vida de componentes e fluxo de dados reativos com a biblioteca RxJS

   Aperfeiçoe sua habilidade em controlar o comportamento dos componentes em várias fases de sua existência, desde a inicialização até a destruição, entendendo hooks do ciclo de vida como ngOnInit, ngOnChanges e ngOnDestroy.

   Aprofunde-se na utilização da biblioteca RxJS para programação reativa no Angular. Este passo detalha a criação de observables, a aplicação estratégica de operadores de transformação e combinação e a implementação de fluxos de dados assíncronos, proporcionando uma gestão eficiente de dados reativos em suas aplicações.

   1. [Angular: Ciclo de vida (TODO App)](https://cursos.alura.com.br/course/angular-ciclo-vida)
   2. [Programação Reativa](https://www.youtube.com/watch?v=ifA-57jTk7Y)
   3. [RxJS e Angular: programando de forma reativa](https://cursos.alura.com.br/course/rxjs-angular-programando-forma-reativa)

3. Melhore a experiência do usuário com animações e interações atrativas no Angular
   Aqui, você mergulhará no mundo das animações e interações envolventes para aprimorar significativamente a experiência de uso em aplicações Angular. Este passo não só ensinará técnicas de animação, mas também fornecerá insights sobre como gerenciar efetivamente o estado dos componentes para otimizar o desempenho e garantir a estabilidade da sua aplicação.

   1. [A importância do motion design na experiência do usuário - Artigo](https://www.alura.com.br/artigos/importancia-motion-design-experiencia-usuario)
   2. Angular: torne sua aplicação interativa e personalizada com animações
   3. [Como o Motion Design pode contribuir para a UX/UI](https://www.alura.com.br/artigos/como-motion-design-pode-contribuir-uxui)
   4. [Angular: aprimore suas técnicas de animação e crie interfaces ainda mais atraentes](https://cursos.alura.com.br/course/angular-tecnicas-animacao-interfaces-atraentes)

4. Acessibilidade no Angular: aprimorando formulários, modais e rotas
   Neste último passo você aprenderá como melhorar a acessibilidade de uma aplicação utilizando o framework Angular. Serão abordadas melhorias na acessibilidade em aspectos como a navegação entre as rotas da aplicação, formulários, gerenciamento de foco e fornecimento de feedback auditivo às interações dos usuários. O curso propõe desafios para que você aplique os conhecimentos adquiridos.

   1. [Fronteiras do Front-end | EP 08: Tour sobre Acessibilidade na web](https://cursos.alura.com.br/extra/alura-mais/fronteiras-do-front-end-ep-08-tour-sobre-acessibilidade-na-web-c124)
   2. [Acessibilidade web – Hipsters #21](https://www.hipsters.tech/acessibilidade-web-hipsters-21/)
   3. [Acessibilidade no Angular: aprimorando formulários, modais e rotas](https://cursos.alura.com.br/course/acessibilidade-angular-formularios-modais-rotas)

5. [Angular: explorando testes de unidade e integração](https://cursos.alura.com.br/course/angular-explorando-testes-unidade-integracao)
6. [Lab Signals](https://cursos.alura.com.br/course/angular-gerenciando-estado-signals/task/178124)

</details>

<details>
<summary>TODO (adicionais) :white_check_mark:</summary>

## Configurar

- [x] Configurar um [Monorepo NX](https://nx.dev/concepts/more-concepts/why-monorepos) para esses projetos (configurar projetos);
  - [x] Buscante;
  - [x] Memoteca;
  - [x] Todo app;
  - [x] Forms-reativos;
- [x] Configurar estilos do PrimeNg para todos os APPS;
- [x] Configurar [Cypress](https://www.cypress.io/);
- [x] Configurar git hook husky [Husky](https://github.com/typicode/husky);
- [x] Configurar JEST e testes unitários (alguns).

## Desafios opcionais

- [ ] Animar outros projetos
</details>
