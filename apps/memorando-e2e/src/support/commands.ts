/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    mockarBuscarTarefa(): void;
    mockarDeletarTarefa(): void;
    mockarEditarTarefa(): void;
    mockarCadastrarTarefa(): void;
  }
}

const mockarBuscarTarefa = () => {
  cy.intercept('GET', '**/memorando-back*', {
    fixture: 'memorias',
  }).as('mockarBuscarMemorias');
};

Cypress.Commands.add('mockarBuscarTarefa', mockarBuscarTarefa);

const mockarDeletarTarefa = () => {
  cy.intercept('DELETE', '**/memorando-back/**', {}).as('mockarDeletarTarefa');
};

Cypress.Commands.add('mockarDeletarTarefa', mockarDeletarTarefa);

const mockarEditarTarefa = () => {
  cy.intercept('PUT', '**/memorando-back/**', {}).as('mockarEditarTarefa');
};

Cypress.Commands.add('mockarEditarTarefa', mockarEditarTarefa);

const mockarCadastrarTarefa = () => {
  cy.intercept('POST', '**/memorando-back*', {}).as('mockarCadastrarTarefa');
};

Cypress.Commands.add('mockarCadastrarTarefa', mockarCadastrarTarefa);
