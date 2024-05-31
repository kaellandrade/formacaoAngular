<p align="center">
  <img width='30%' src=".github/angular.svg" alt="Angular">
</p>

# Formação Angular [Monorepo](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
O intuito desse monorepo é manter todas as aplicações da [formação Alura Angular](https://cursos.alura.com.br/formacao-angular-14) em um único local e funcional.

Apliquei diversas outras ferramentas/tecnologias que não fazem parte da formação, mas te as quais eu tinha vontade de aprendê-las, tais como:

[![nx](https://img.shields.io/badge/Nx-blue?style=flat-square&logo=nx&logoColor=white)](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
[![PrimeNG](https://img.shields.io/badge/-PrimeNG-3B82F6?style=flat-square&logo=angular&logoColor=white)](https://primeng.org/)
[![PrimeFlex](https://img.shields.io/badge/-PrimeFlex-white?style=flat-square&logo=angular&logoColor=00DA99)](https://primeflex.org/)
[![Cypress](https://img.shields.io/badge/-Cypress-black?style=flat-square&logo=cypress&logoColor=00DA99)](https://www.cypress.io/)
[![Husky](https://img.shields.io/badge/-HookHusky-white?style=flat-square&logo=git&logoColor=00DA99)](https://typicode.github.io/husky/)
[![Eslint](https://img.shields.io/badge/-HookHusky-black?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)

## Setup :gear:
- Instale as dependencias `npm install`;

## Apps (Overview) :movie_camera:

### Buscador de Livos

Aplicação que utiliza a [API pública do Google](https://developers.google.com/books) busca de livros.

https://github.com/kaellandrade/formacaoAngular/assets/51521476/b22c98f4-73cc-4e67-9eb6-3b776ed124c4

---

### Memoteca

CRUDE simples para iniciar meu aprendizado no framework Angular.

https://github.com/kaellandrade/formacaoAngular/assets/51521476/f85e3e5a-c7d7-47f5-8674-70389fdf7241


---

### TODO APP

App TODO simples para praticar os Hooks do Angular

https://github.com/kaellandrade/formacaoAngular/assets/51521476/fd632ff7-a7a8-4f2a-89ed-429fad3822ab

---

## Rodando os Apps :hammer_and_wrench:
- [Buscador de Livos](#buscador-de-livos) :book: - `npm run buscante-app`;
- [App Memoteca](#memoteca) :iphone: - `npm run memoteca-app`;
- [Todo APP](#todo-app) :white_check_mark: - `npm run todo-app`;

<details>
<summary>Mais detalhes sobre essa formação da Alura (Guideline)</summary>

1. Explore as bases do Angular

   Mergulhando no universo do Angular, começando pela criação de aplicações usando a poderosa ferramenta Angular CLI.
   Aprendendo sobre estrutura de componentes e explorando os conceitos fundamentais, tais como templates, diretivas, services e injeção de dependências.
   Aprendendo como fazer a configuração de rotas da aplicação e aproveitando o poder do HTTPClient do Angular para executar operações CRUD no seu back-end.
   Além disso, vi construção de formulários e a aplicação de validações, utilizando as duas abordagens do angular - data driven (formulários reativos) e template driven - proporcionando uma base sólida para sua evolução.

   1. Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD
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

   1. Angular: Ciclo de vida (TODO App)
   2. [Programação Reativa](https://www.youtube.com/watch?v=ifA-57jTk7Y)
   3. RxJS e Angular: programando de forma reativa

3. Melhore a experiência do usuário com animações e interações atrativas no Angular(em andamento...)
</details>

<details>
<summary>TODO (adicionais) :white_check_mark:</summary>

- [X] Configurar um [Monorepo NX](https://nx.dev/concepts/more-concepts/why-monorepos) para esses projetos (configurar projetos);
   - [X] Buscante
   - [X] Memoteca
   - [X] Todo app 
   - [X] Forms-reativos
- [X] Configurar estilos do PrimeNg para todos os APPS
- [ ] Configuar [Cypress](https://www.cypress.io/);
- [ ] Configurar git hook husky [Husky](https://github.com/typicode/husky).
</details>
