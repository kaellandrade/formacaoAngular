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
    mockarBuscaLivro(): void;
  }
}

const mockarBuscaLivro = () => {
  cy.intercept('GET', 'https://www.googleapis.com/**', {
    fixture: 'google-response',
  });
};
Cypress.Commands.add('mockarBuscaLivro', mockarBuscaLivro);
