describe.only('Inwarranty Flow Test', () => {

  it.only('Login API Test', () => {
    cy.request({
      method: 'POST',
      url: 'http://139.59.91.96:9000/v1/login',
      body: {
        "username": "iamfd",
        "password": "password"
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message')
      expect(response.body.message).to.be.eql('Success')

    });
  });

});
