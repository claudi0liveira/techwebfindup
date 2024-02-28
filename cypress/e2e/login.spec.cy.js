describe('Login sem sucesso', () => {
    it('Tentar acessar com dados inválidos', () => {
      cy.visit(''), 
      cy.get('.font-alt').should('have.text','Faça login para continuar')

      cy.get(':nth-child(1) > .relative.undefined > .group\\/nui-input > .undefined')
      .type('tesa@qafindup.com')

      cy.get(':nth-child(2) > .relative.undefined > .group\\/nui-input > .undefined')
      .type('1@Deve')

      cy.get('.my-10 > .leading-5 > .text-primary-600')
      .should('have.text', 'Esqueceu a senha?')

      cy.get('.is-button')
      .should('have.text', 'Acessar')
      .click({force:true})

      cy.get('.min-h-\\[3rem\\]')
      .should('have.text', 'Usuário ou senha inválidos')
})

describe('Esqueceu a senha', () => {
    it('Tentar solicitar uma recuperação de senha', () => {
        cy.visit(''),
        cy.get('.my-10 > .leading-5 > .text-primary-600')
      .should('have.text', 'Esqueceu a senha?')
      .click({force:true})

      cy.get('.font-heading')
      .should('have.text','Recuperar Senha')
      
      cy.get('.font-alt')
      .should('have.text', 'Siga as instruções enviadas para o seu endereço de e-mail')

      cy.get('.group\\/nui-input > .undefined')
      .type('passeiagr@gmail.com')

      cy.get('.is-button')
      .should('have.text', 'Recuperar Senha')
      .click({force:true})

      cy.get('.swal2-confirm')
      .click()

      cy.get('.text-base')
      .should('have.text','Um e-mail foi enviado para você com instruções sobre como redefinir sua senha.')

      cy.get('[enter-active-class="transition-all duration-300 ease-out"] > .text-muted-400 > .text-primary-600')
      .should('be.visible')
      .click()

    })
})
describe('Login realizado com sucesso', () => {
    it('Tentar acessar com dados válidos.', () => {

        cy.visit('https://tech.findup.com.br/'),
        cy.get(':nth-child(1) > .relative.undefined > .group\\/nui-input > .undefined')
      .type('teresa@qafindup.com')

      cy.get(':nth-child(2) > .relative.undefined > .group\\/nui-input > .undefined')
      .type('123@Deve23')

      cy.get('.is-button')
      .should('have.text', 'Acessar')
      .click({force:true})

      cy.get('.ml-5 > .font-heading').should('contain', 'Bem vindo');

    })
})
})  