describe.only('Inwarranty Flow Test', () => {


it.only('Visit Phoenix Website and login with fd credentials', () => {
    cy.visit('/');
    cy.get('.fuse-mat-button-large').should('be.visible').click();
    cy.get('user > .mat-focus-indicator').should('be.visible').click()
    cy.get('.mat-menu-content > :nth-child(3)').should('be.visible').click()
    cy.contains('signed out!');
    cy.url().should('include','sign-out');



    
  });
  

});
