describe('Cadastro de novo técnico', () => {
  it('Acessando o Formulário de cadastro', () => {
   // cy.visit('https://tech.findup.dev'),
    cy.get('.font-heading').should('have.text','Bem-vindo a FindUP')

    cy.get('.mt-4 > .text-primary-600')
    .click({force:true})
    cy.get('.is-button')
    .click()

    cy.get('.text-danger-600')
    .should('have.text', 'Você deve concordar com os termos para prosseguir')

    cy.get('[data-testid="checkTerms"]')
    .check()
    cy.get('.is-button')
    .click()

    // Dados Pessoais

    cy.get('.font-heading')
    .should('have.text', 'Dados Pessoais')

    cy.get('.is-button')
    .click({force:true})

    cy.get('[data-testid="firstName"]')
    .type('Teresa')

    cy.get('[data-testid="lastName"]')
    .type('Santana')

    cy.get('[data-testid="username"]')
    .type('gabcastro@qafindup.com.br')

    cy.get(':nth-child(5) > .relative.undefined > .group\\/nui-input > .up-focus')
    .type('81996887768')

    cy.get(':nth-child(6) > .relative.undefined > .group\\/nui-input > .up-focus')
    .type('406926654071')
    cy.get('.is-button')
    .click({force:true})
    cy.wait(3000)

    cy.get(':nth-child(6) > .relative.undefined > .group\\/nui-input > .text-danger-600')
    .should('have.text', 'O CPF informado não é válido.')

    cy.get(':nth-child(6) > .relative.undefined > .group\\/nui-input > .up-focus')
    .clear()
    .type('93982993059') 
    cy.get('.is-button')
    .click({force:true})

    cy.get(':nth-child(4) > .relative.undefined > .group\\/nui-input > .text-danger-600')
    .should('have.text', 'O email informado já está sendo utilizado.')

    cy.get('[data-testid="username"]')
    .clear()
    .type('teresa@qafindup.com')

    cy.get('.is-button')
    .click({force:true})

    // Dados Empresariais

    cy.get('.font-heading').should('have.text','Dados Empresariais')
    cy.get('[data-testid="checkCnpj"]')
    .check()
    cy.get('.is-button')
    .click()

    cy.get('[data-testid="companyName"]')
    .type('Cia LTdA TI')

    cy.get(':nth-child(3) > .relative.undefined > .group\\/nui-input > .up-focus')
    .type('28.322.833/0001-86')

    cy.get('.is-button')
    .click()

    cy.get('.text-danger-600')
    .should('have.text', 'O CNPJ informado não é válido.')
    cy.get(':nth-child(3) > .relative.undefined > .group\\/nui-input > .up-focus')
    .clear()
    .type('45.050.392/0001-31')
    cy.get('.is-button')
    .click()

    // Endereço

    cy.get('.font-heading')
    .should('have.text', 'Endereço')

    cy.get('.is-button')
    .click({force:true})

    cy.get('#headlessui-listbox-button-\\:r1\\:')
    .click({force:true})
    .wait(2000)
    cy.get('#headlessui-listbox-options-\\:r2\\:')
    .type('Pernambuco')

    cy.get('#headlessui-listbox-option-\\:rl\\: > .relative')
    .click({force:true})

    cy.get('#headlessui-listbox-button-\\:r4\\:')
    .click({force:true})
    .wait(2000)
    cy.get('#headlessui-listbox-options-\\:r5\\:')
    .type('R', {delay: 600})

    cy.get('#headlessui-listbox-option-\\:r52\\: > .relative')
    .click({force:true})

    cy.get('.is-button')
    .click({force:true})

    cy.get('.font-heading')
    .should('have.text','Credencial de Acesso')

    // credenciais

    cy.get('[data-testid="password"]')
    .type('3928392')
    cy.get('[data-testid="confirmPassword"]')
    .type('3928392')
    cy.get('.is-button')
    .click()

    cy.get('[data-testid="password"]')
    .clear()
    .type('321@dav')
    cy.get('[data-testid="confirmPassword"]')
    .type('321@dav')
    cy.get('.is-button')
    .click()

    cy.get('.-pt-10 > :nth-child(1) > .relative.undefined > .group\\/nui-input > .text-danger-600')
    .should('have.text', 'A senha deve obter todos os requisitos de força')
    cy.get(':nth-child(4) > :nth-child(1) > .relative.undefined > .group\\/nui-input > .text-danger-600')
    .should('have.text', 'As senhas não conferem')

    cy.get('[data-testid="password"]')
    .clear()
    .type('123@Dev')
    cy.get('[data-testid="confirmPassword"]')
    .clear()
    .type('123@Dev')
    cy.get('.is-button')
    .click()
    cy.get('.text-danger-600')
    .should('have.text', 'A senha deve obter todos os requisitos de força')

    cy.get('[data-testid="password"]')
    .clear()
    .type('123@Deve23')
    cy.get('[data-testid="confirmPassword"]')
    .clear()
    .type('123@Deve23')
    cy.get('.is-button')
    .click()

    // Ultima etapa
    cy.get('.font-heading')
    .should('have.text', 'Última pergunta')
    cy.get('#headlessui-listbox-label-\\:r6v\\:')
    .should('have.text', 'Por onde você nos conheceu?')
    
    cy.get('#headlessui-listbox-button-\\:r70\\:')
    .click({force:true})
    cy.wait(2000)
    cy.get('#headlessui-listbox-option-\\:r74\\: > .relative')
    .click({force:true})

    cy.get('.is-button')
    .click()

    // Cadastro realizado

    cy.get('.font-heading')
    .should('have.text', 'Cadastro realizado')
    cy.get('.font-alt')
    .should('have.text', 'Seu cadastro já foi realizado e entrará em análise para ativação. Fique atento ao seu e-mail, qualquer atualização enviaremos por lá.')

    cy.get('.flex-col.gap-4 > .flex > :nth-child(1)')
    .should('be.visible')
    cy.get('.flex-col.gap-4 > .flex > :nth-child(2)')
    .should('be.visible')
    cy.get('.bg-primary-500')
    .should('be.visible')
    .and('have.text', 'Acessar web')
    .click({force:true})

    cy.wait(9000)
  })
  });