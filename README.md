<p align="center">
  <img width='30%' src=".github/angular.svg" alt="Angular">
</p>

# Formação Angular (MONOREPO)

Esse monorepo foi configurado com o [NX](https://nx.dev/getting-started/intro);

## Setup
- Instale as dependencias `npm install`;

## Apps (Overview)

### Buscador de Livos

Aplicação que utliza a [API pública do Google](https://developers.google.com/books) busca de livros.


#### Telas
![Tela](./.github/rxjs-google-livros/books.png)
![Tela](./.github/rxjs-google-livros/busca-livros.gif)

---

### Memoteca

CRUDE simples para iniciar meu aprendizado no framework Angular.

#### Telas
![Aplicação em execução](./.github/demo_memoteca.gif)

---

### TODO APP
 App TODO simples para praticar os Hooks do Angular

#### Telas
![Todo](./.github/life-cycle/todo.png)

---

### Form reativo
Explorando os forms reativos do Angular

#### Telas
![Tela](./.github/form-teplate/aplicacao.png)

---

## Rodando os Apps
- [Buscador de Livos](#buscador-de-livos) :book: - `npx nx serve buscante`;
- [App Memoteca](#memoteca) :iphone: - `npx nx serve memoteca`;
- [Todo APP](#todo-app) :white_check_mark: - `npx nx serve life-cycle`;
- [Forms reativos](#form-reativo) :arrows_clockwise: - `npx nx serve forms-reativos`;

2. Explore as bases do Angular

   Mergulhando no universo do Angular, começando pela criação de aplicações usando a poderosa ferramenta Angular CLI.
   Aprendendo sobre estrutura de componentes e explorando os conceitos fundamentais, tais como templates, diretivas, services e injeção de dependências.
   Aprendendo como fazer a configuração de rotas da aplicação e aproveitando o poder do HTTPClient do Angular para executar operações CRUD no seu back-end.
   Além disso, vi construção de formulários e a aplicação de validações, utilizando as duas abordagens do angular - data driven (formulários reativos) e template driven - proporcionando uma base sólida para sua evolução.

   1. [Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD (Projeto Biblioteca memórias)](/memoteca)
      1. Router;
      2. ActivatedRoute;
      3. Services com HttpClient;
      4. Injeção de dependências de props;
      5. E algumas diretivas básicas do Angular.
   2. [Angular 14: evoluindo a aplicação (Projeto Biblioteca memórias)](/memoteca)
      1. Formulários reativos com ReactiveFormsModule, FormGroup;
   3. [Formulários orientados a templates (Alura books)](/forms-angular-main/)

3. Gerencie o ciclo de vida de componentes e fluxo de dados reativos com a biblioteca RxJS

   Aperfeiçoe sua habilidade em controlar o comportamento dos componentes em várias fases de sua existência, desde a inicialização até a destruição, entendendo hooks do ciclo de vida como ngOnInit, ngOnChanges e ngOnDestroy.

   Aprofunde-se na utilização da biblioteca RxJS para programação reativa no Angular. Este passo detalha a criação de observables, a aplicação estratégica de operadores de transformação e combinação e a implementação de fluxos de dados assíncronos, proporcionando uma gestão eficiente de dados reativos em suas aplicações.

   1. [Angular: Ciclo de vida (TODO App)](/life-cycle-todo-app/)
   2. [Programação Reativa](https://www.youtube.com/watch?v=ifA-57jTk7Y)
   3. [RxJS e Angular: programando de forma reativa (Consumindo service do Google Books)](/rxjs-projeto/)

4. Melhore a experiência do usuário com animações e interações atrativas no Angular(em andamento...)

#### TODO (adicionais):

- [ ] Configurar um [Monorepo NX](https://nx.dev/concepts/more-concepts/why-monorepos) para esses projetos (configurar projetos);
   - [X] Buscante
   - [ ] Memoteca
   - [ ] Todo app 
   - [ ] Forms-reativos

- [ ] Configuar [Cypress](https://www.cypress.io/);
- [ ] Configurar git hook [Husky](https://github.com/typicode/husky).