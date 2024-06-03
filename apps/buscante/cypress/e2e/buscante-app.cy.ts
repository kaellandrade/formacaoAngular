describe('buscante', () => {
  beforeEach(() => {
    cy.mockarBuscaLivro();
    cy.visit('http://localhost:4200/lista-livros');
  });

  it("Deve realizar a busca de um livro Ex: 'PYTHON'", () => {
    cy.get('[data-cy="input-search"]').click();
    cy.focused().type('python');
    cy.contains('529 livros encontrados');
  });

  it('Deve deve exibir os detalhes do livro', () => {
    cy.get('[data-cy="input-search"]').click();
    cy.focused().type('python');
    cy.get('[data-cy="btn-book0"]').click();
    cy.contains('Python para análise de dados');
    cy.contains('Sinopse');
    cy.contains('Autoria');
    cy.contains('Data de publicação');
    cy.contains('Editora');
    cy.contains('Ler prévia');
  });
});
