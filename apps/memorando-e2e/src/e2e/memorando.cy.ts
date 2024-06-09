describe('memorando-e2e', () => {
  beforeEach(() => {
    cy.mockarBuscarTarefa();
    cy.mockarDeletarTarefa();
    cy.mockarEditarTarefa();
    cy.mockarCadastrarTarefa();
    cy.visit('/');
  });

  it('Deve criar uma nova tarefa', () => {
    cy.get('[data-cy="criar-task"]').click();
    cy.get('[data-cy="input-task"]').type('Nova tarefa');
    cy.get('[data-cy="select-prioridade"]').select('Baixa');
    cy.get('[data-cy="select-categoria"]').select('Casa');
    cy.get('[data-cy="btn-salvar"]').click();
  });

  it('Deve exibir minhas tarefas', () => {
    cy.contains('Suas tarefas');
  });
  it('Deve apagar uma tarefa', () => {
    cy.get('[data-cy="btn-apagar-6"]').click();
  });

  it('Deve marcar uma tarefa como concluida', () => {
    cy.get('[data-cy="btn-marcar-6"]').click();
  });
});
