describe('Testes de páginas', () => {
    beforeEach(() => {
      cy.visit('https://web-n7xatwgy0el5.up-pl-waw1-1.apps.run-on-seenode.com');
    });
  
    it('Deve exibir a página inicial corretamente', () => {
      cy.get('header h1').should('contain', 'PROJETO QA');
      cy.get('.btn-cadastro').should('exist');
      cy.get('.btn-login').should('exist');
    });
  
    it('Deve fazer login com sucesso', () => {
      cy.get('.btn-login').click();
      cy.get('input[name="email"]').type('henry@henry.com');
      cy.get('input[name="senha"]').type('Henry123');
      cy.get('.login-form button[type="submit"]').click();
      cy.url().should('include', '/minhaconta');
      cy.get('header .user-info p').should('contain', 'Olá, Henry');
    });
  
    it('Deve redirecionar para a página de cadastro', () => {
      cy.get('.btn-cadastro').click();
      cy.url().should('include', '/cadastro');
      cy.get('h2').should('contain', 'Cadastre-se');
    });
  
    it('Deve realizar o cadastro com sucesso', () => {
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
  
    it('Deve fazer login depois logout com sucesso', () => {
      // login
      cy.get('.btn-login').click();
      cy.get('input[name="email"]').type('henry@henry.com');
      cy.get('input[name="senha"]').type('Henry123');
      cy.get('.login-form button[type="submit"]').click();
      cy.url().should('include', '/minhaconta');
      
      // logout
      cy.get('.btn-logout').click();
      cy.url().should('not.include', '/minhaconta');
      cy.get('header .user-info').should('not.exist');
    });

  });
  