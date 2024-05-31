 describe('memoteca', () => {
  beforeEach(() => cy.visit('http://localhost:4200/listarPensamento'));

  it('Deve exibir a tela de listagem dos pensamentos', () => {
    cy.contains('Guarde trechos de músicas, citações de livros pensamentos e suas melhores ideias');
  });
  it('Deve realizar a busca de um pesamento', () => {
    cy.get('[data-cy="input-busca"]').type('Antes que o software possa ser reutilizável, {enter}');
    cy.get('[data-cy="check-favoritos"]').click();
  });

  it('Deve abrir o modal de excluir um pensamento', () => {
    cy.get('[data-cy="id-trash-b8d5"]').click();
    cy.contains('Tem certeza que deseja remover o pensamento harold abelson ?');
    cy.get('.p-button-text > .p-button-label').click();
  });

  it('Deve carregar mais pensamentos', () => {
    cy.get('[data-cy="carregar-mais-btn"]').click();
    cy.get('[data-cy="carregar-mais-btn"]').click();
    cy.contains('Não há mais pensamentos para exibir');
  });

  it('Deve favoritar pensamentos', () => {
    cy.get('[data-cy="id-favorite-b8d5"]').click();
    cy.get('[data-cy="id-favorite-6a0b"]').click();
    cy.get('[data-cy="id-favorite-5c3d"]').click();
  });
});
