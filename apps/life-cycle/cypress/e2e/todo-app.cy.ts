const cadastrarTask = () => {
  cy.get('[data-cy="input-task"]').as('inputTask');
  cy.get('@inputTask').type('Estudar Estudar JS/TS {enter}');
};

describe('TODO-APP', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:4200/');
  });
  it('Deve garantir a tela de listagem das task vazias', () => {
    cy.contains('Ótimo, você não tem tarefas!');
  });
  it('Deve cadastrar uma nova tarefa', () => {
    cadastrarTask();
    cy.contains('Tarefa foi cadastrada!');
  });
  it('Deve atualizar uma tarefa garantido que os botões de ação das task fiquem disabled', () => {
    cadastrarTask();
    cy.get('[data-cy="action-btn-edit-1"').as('btn-edit');
    cy.get('@btn-edit').click();
    cy.get('[data-cy="input-task"]').clear();
    cy.focused().type('Estudar JavaScript e TapeScript');
    cy.get('@btn-edit').should('have.class', 'p-disabled');
    cy.get('[data-cy="1"]').should('have.attr', 'ng-reflect-disabled', 'true');
    cy.get('[data-cy="bt-apagar-tudo"]').should('have.class', 'p-disabled');
    cy.get('[data-cy="submit-btn"]').click();
    cy.contains('Tarefa foi editada!');
  });

  it('Deve apagar uma task', () => {
    cadastrarTask();
    cy.get('[data-cy="action-btn-trash-1"').click();
    cy.get('.p-dialog-footer > .p-button-danger').click();
    cy.contains('Tarefa foi deletada!');
  });

  it('Deve cadastrar várias tarefas e apagar todas', () => {
    cadastrarTask();
    cadastrarTask();
    cadastrarTask();
    cadastrarTask();
    cadastrarTask();
    cy.get('[data-cy="bt-apagar-tudo"]').click();
    cy.get('.p-dialog-footer > .p-button-danger').click();
    cy.contains('Todas suas tarefas foram deletadas!');
  });
});
