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
    mockarBuscarPensamentos(): void;
    mockarDeletarPensamento(): void;
    mockarEditarCadastrarExluirPensamento(): void;
  }
}

const mockarBuscarPensamentos = () => {
  cy.intercept('GET', '**/pensamentos*', {
    fixture: 'pensamentos-busca',
    headers: {
      'Access-Control-Expose-Headers': 'X-Total-Count, Link',
      Link: `<http://localhost:5000/pensamentos?_page=1&_limit=6&q=>; rel="first", <http://localhost:5000/pensamentos?_page=1&_limit=6&q=>; rel="prev", <http://localhost:5000/pensamentos?_page=3&_limit=6&q=>; rel="next", <http://localhost:5000/pensamentos?_page=3&_limit=6&q=>; rel="last"`,
    },
  }).as('buscarPensamentos');
};

Cypress.Commands.add('mockarBuscarPensamentos', mockarBuscarPensamentos);

const mockarDeletarPensamento = () => {
  cy.intercept('DELETE', '**/pensamentos/**', {
    fixture: 'pensamento',
  });
};

Cypress.Commands.add('mockarDeletarPensamento', mockarDeletarPensamento);

const mockarEditarCadastrarExluirPensamento = () => {
  cy.intercept('PUT', '**/pensamentos/**', {
    fixture: 'pensamento',
  });

  cy.intercept('GET', '**/pensamentos/**', {
    fixture: 'pensamento',
  });

  cy.intercept('POST', '**/pensamentos', {
    fixture: 'pensamento',
  });
};

Cypress.Commands.add(
  'mockarEditarCadastrarExluirPensamento',
  mockarEditarCadastrarExluirPensamento,
);
