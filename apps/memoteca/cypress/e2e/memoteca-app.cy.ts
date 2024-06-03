const preencherForm = () => {
  cy.get('[data-cy="label-pensamento"]').click();
  cy.focused().clear();
  cy.focused().type('Nunca confie em tradução automática de documentação');

  cy.get('[data-cy="label-autor"]').click();
  cy.focused().clear();
  cy.focused().type('micael andrade');

  cy.get('[data-cy="modelo1"]').click();
  cy.get('[data-cy="modelo2"]').click();
  cy.get('[data-cy="modelo3"]').click();

  cy.get('[data-cy="btn-salvar"]').click();
};

describe('memoteca', () => {
  beforeEach(() => {
    cy.mockarBuscarPensamentos();
    cy.mockarDeletarPensamento();
    cy.mockarEditarCadastrarExluirPensamento();
    cy.visit('http://localhost:4200/listarPensamento');
  });

  it('Deve cadastrar um pensamento', () => {
    cy.get('[data-cy="adicionar-pensamento"]').click();
    preencherForm();
    cy.contains(
      'Pensamento cadastrado com sucesso, redirecionando para tela inicial!',
    );
  });

  it('Deve exibir a tela de listagem dos pensamentos', () => {
    cy.contains(
      'Guarde trechos de músicas, citações de livros pensamentos e suas melhores ideias',
    );
  });
  it('Deve realizar a busca de um pesamento', () => {
    cy.get('[data-cy="input-busca"]').type(
      'Antes que o software possa ser reutilizável, {enter}',
    );
    cy.get('[data-cy="check-favoritos"]').click();
  });

  it('Deve deletar um pensamento', () => {
    cy.get('[data-cy="id-trash-b8d5"]').click();
    cy.contains('Tem certeza que deseja remover o pensamento harold abelson ?');
    cy.get('.p-confirm-dialog-accept').click();
    cy.contains('Pensamento excluído');
  });

  it('Deve carregar mais pensamentos', () => {
    cy.get('[data-cy="carregar-mais-btn"]').click();
  });

  it('Deve favoritar 3 pensamentos', () => {
    cy.get('[data-cy="id-favorite-b8d5"]').click();
    cy.get('[data-cy="id-favorite-6a0b"]').click();
    cy.get('[data-cy="id-favorite-5c3d"]').click();
  });

  it('Deve editar um pensamento', () => {
    cy.get('[data-cy="id-edit-b8d5"]').click();
    preencherForm();
    cy.contains(
      'Pensamento editado com sucesso, redirecionando para tela inicial!',
    );
  });
});
