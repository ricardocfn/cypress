describe('Testes de validação de formulário', () => {
    beforeEach(() => {
      cy.visit('https://web-n7xatwgy0el5.up-pl-waw1-1.apps.run-on-seenode.com/cadastro');
    });
  
    it('Deve exibir erro ao inserir um email inválido', () => {
      cy.get('#email').type('emailinvalido');
      cy.get('form').submit();
      cy.get('#email-error').should('be.visible');
    });
  
    it('Deve exibir erro ao inserir um CPF inválido', () => {
      cy.get('#cpf').type('12345');
      cy.get('form').submit();
      cy.get('#cpf-error').should('be.visible');
    });
  
    it('Deve exibir erro ao inserir uma senha inválida', () => {
      cy.get('#senha').type('senhafraca');
      cy.get('form').submit();
      cy.get('#senha-error').should('be.visible');
    });
  
    it('Deve exibir erro ao confirmar senha diferente da senha', () => {
      cy.get('#senha').type('Senha123');
      cy.get('#confirmar-senha').type('Senha456');
      cy.get('form').submit();
      cy.get('#confirmar-senha-error').should('be.visible');
    });
  
    it('Deve realizar o cadastro com sucesso', () => {
      cy.visit('https://web-n7xatwgy0el5.up-pl-waw1-1.apps.run-on-seenode.com/');
    
      // Gerar valores aleatórios para os campos ISSO É UM MÁXIMO! AUTOMATIZAMOS O AUTOMÁTICO rsrsrs
      const nome = `Nome${Math.floor(Math.random() * 100000)}`;
      const sobrenome = `Sobrenome${Math.floor(Math.random() * 100000)}`;
      const email = `email${Math.floor(Math.random() * 100000)}@exemplo.com`;
      const cpf = Math.floor(Math.random() * 100000000000);
    
      cy.get('.btn-cadastro').click();
      cy.get('input[name="nome"]').type(nome);
      cy.get('input[name="sobrenome"]').type(sobrenome);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="cpf"]').type(cpf);
      cy.get('input[name="senha"]').type('Senha123');
      cy.get('input[name="confirmar-senha"]').type('Senha123');
      cy.get('.btn-cadastrar').click();
      cy.get('header h1').should('contain', 'PROJETO QA');
    });

    it('Deve mostrar a mensagem de Email já cadastrado ao inserir dados já cadastrados anteriormente', () => {
      cy.get('#nome').type('Jeo');
      cy.get('#sobrenome').type('Neto');
      cy.get('#email').type('jeao@exemplo.com');
      cy.get('#cpf').type('12345678903');
      cy.get('#senha').type('Senha123');
      cy.get('#confirmar-senha').type('Senha123');
      cy.get('.btn-cadastrar').click();
      cy.get('body').should('contain' , 'Email ou CPF já cadastrados.')
    });
  });
  