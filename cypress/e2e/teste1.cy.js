/// <reference types='cypress' />

describe('RPV Finance Controls', () => {
    //hooks
    //trechos que executam antes e depois dos testes
    //before --> antes de todos os testes
    //beforeEach --> antes de cada teste
    //after --> depois de todos os testes
    //afterEach --> depois de casa teste

    beforeEach(()=>{
        cy.visit('https://dev-finance.netlify.app/');
    })

// it('cadastrar entradas', () => {
//     // fluxo manual enter
//     // mapear os elementos que vamos interagir
//     // descrever as interações com cypress
//     // adicionar as asserções que vamos precisar
//     // cy.get --> mapear um elemento

//     cy.get('#data-table tbody tr').should('have.length',0);

//     cy.visit('https://dev-finance.netlify.app/'); 

//     cy.get('#transaction .button').click(); // id + class
//     cy.get('#description').type('Puteiro de Luxo RPV');
//     cy.get('[name=amount]').type('3000000'); // atributo
//     cy.get('#date').type('2024-07-17'); // atributo
//     cy.get('button').contains('Salvar').click(); // tipo

//     cy.get('#data-table tbody tr').should('have.length',1);
// })
// it.only('remover lançamento', () => {

//     cy.get('#data-table tbody tr').should('have.length', 0);
//     cy.get('#transaction .button').click(); // id + class
//     cy.get('#description').type('Placa de video 3080');
//     cy.get('[name=amount]').type('3800'); // atributo
//     cy.get('#date').type('2024-07-22'); // atributo
//     cy.get('button').contains('Salvar').click(); // tipo

//     cy.get('#data-table tbody tr').should('have.length', 1);

//     cy.get(':nth-child(4) > img').click();

//     cy.get('#data-table tbody tr').should('have.length', 0);
// });
// });

it.only('remover entrada e saida', () => {
    const entrada = 'Puteiro de Luxo RPV';
    const saida = 'Placa de video 3080';

    cy.get('#transaction .button').click(); // id + class
    cy.get('#description').type(entrada);
    cy.get('[name=amount]').type('3000000'); // atributo
    cy.get('#date').type('2024-07-17'); // atributo
    cy.get('button').contains('Salvar').click(); // tipo

    cy.get('#transaction .button').click(); // id + class
    cy.get('#description').type(saida);
    cy.get('[name=amount]').type('-3800'); // atributo
    cy.get('#date').type('2024-07-22'); // atributo
    cy.get('button').contains('Salvar').click(); // tipo

    cy.get('td.description').contains(saida)
    .parent()
    .find('img[onclick*=remove]').click();

});
});