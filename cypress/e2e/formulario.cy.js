describe('Formulário', ()=> {
beforeEach(() =>{
    cy.visit('../src/index.html')
})
    it('Preenchimento dos campos do formulario usando commands.js', () => {
        cy.formulario()
        cy.get('.success-message').should('be.visible')
    });

    it('Preenchimento do formulario com sucesso', () => {
        cy.get('#firstName').type('Pedro') 
        cy.get('#lastName').type('Gil')
        cy.get('#email').type('Pedro@sss.com')
        cy.get('#phone').type('61999999999')
        cy.get('#product').select('Cypress')
        .should('have.value', 'cypress')
        cy.get('#open-text-area').type('Exemplo')
        cy.get('.button').click()
        cy.get('.success-message')
        .should('be.visible')

    });
    
    it('Deixando campos obrigatórios vazios e verificando mensagem de erro', () => {
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    });

    it('Preenchendo os campos obrigatórios e marcando a caixa de seleção de e-mail', () => {
        cy.get('#firstName').type('Pedro').should('have.value', 'Pedro')
        cy.get('#lastName').type('Gil')
        cy.get('#email').type('Pedro@sss.com')
        cy.get('#open-text-area').type('Exemplo')
        cy.get('input[type="checkbox"][value="email"]')
        .should('not.be.checked')
        .check()
        .should('be.checked');
        cy.get('.button').click() 
        cy.get('.success-message').should('be.visible') 
    });

    it('Selecionando uma opção do menu supense', () => {
        cy.get('#product')
        .select('Cypress')
        .should('be.visible', 'Cypress')
    
    });

    it('Selecionando um arquivo', () => { 
        cy.get('#file-upload')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    it('Selecionando o arquivo simulando drag-drop', () => {
        cy.get('#file-upload')
        .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){     
        expect($input[0].files[0].name).to.equal('example.json')
        })
    });
    

    it('Testando Cypress com páginas que abrem em outro link', () => {
       cy.get('#link a')
       .should('have.attr' , 'target', '_blank') //'have.attr': Verifica se um elemento possui um atributo específico
       .invoke('removeAttr' , 'target', '_blank')
       .click()
       cy.get('#title').should('be.visible')
    });

    it('Utilizando invoke para vizualização do icon da cerveja na aplicação', () => {
        cy.get('#cerveja')
        .invoke('show')
        .should('be.visible')
      });

    it('Testando input do tipo radio', () => {
        cy.get('input[type="radio"]')
        .should('have.length' , 4)
        .each(function($radio){
            cy.wrap($radio).check() 
            cy.wrap($radio).should('be.checked')   
        })
    });
})

