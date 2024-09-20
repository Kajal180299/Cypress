describe.only('Inwarranty Flow Test', () => {


it.only('Visit Phoenix Website and login with fd credentials', () => {

  cy.fixture('loginData.json').then((users)=>{
    users.forEach((user) => {

    cy.visit('/');
    cy.get('#username').should('be.visible').clear();
    cy.get('#username').should('be.visible').type(user.username);
    cy.get('#password').should('be.visible').clear();
    cy.get('#password').should('be.visible').type(user.password);
    cy.get('.fuse-mat-button-large').should('be.visible').click();
    cy.get('user > .mat-focus-indicator').should('be.visible').click()
    cy.get('.mat-menu-content > :nth-child(3)').should('be.visible').click()
    cy.contains('signed out!');
    cy.url().should('include','sign-out');
    });


    });
  });
  

});
