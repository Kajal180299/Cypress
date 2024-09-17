describe('Facebook Login Automation Test', () => {
  
    it('Visit Facebook and login with credentials', () => {
      // Step 1: Open Facebook login page
      cy.visit('https://www.facebook.com');
      
      // Step 2: Assert that the URL is correct
      cy.url().should('include', 'facebook.com');
      
      // Step 3: Enter email or phone number (replace with valid credentials)
      cy.get('#email').type('your-email@example.com');
      
      // Step 4: Enter password (replace with valid password)
      cy.get('#pass').type('your-password');
      
      // Step 5: Click on the login button
      cy.get('[data-testid="royal_login_button"]').click();
  
      // Step 6: Assert successful login by checking if redirected to the home page
      cy.url().should('include', 'https://www.facebook.com/');
  
      // Step 7: Optionally, log out by interacting with the menu
      cy.get('[aria-label="Account"]').click();
      cy.contains('Log Out').click();
      // Step 8: Verify you have logged out successfully
      cy.url().should('include', 'https://www.facebook.com/login');
    });

    it('Visit Facebook and login with credentials', () => {
        // Step 1: Open Facebook login page
        cy.visit('/');
        cy.get('.fuse-mat-button-large').should('be.visible').click();
        cy.get('user > .mat-focus-indicator').should('be.visible').click()
        cy.get('.mat-menu-content > :nth-child(3)').should('be.visible').click()
        cy.contains('signed out!');
        cy.url().should('include','sign-out');

        
        // Step 2: Assert that the URL is correct
       // cy.url().should('include', 'facebook.com');
        // cy.get('.signup_box_content > ._42ft').should('be.visible').click();

        
      });
      
    
  });
