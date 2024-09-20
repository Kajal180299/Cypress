describe.only('Inwarranty Flow Test', () => {

  it.only('Login API Test', () => {
    cy.fixture('loginData.json').then((users)=>{
      users.forEach((user) => {
    cy.request({
      method: 'POST',
      url: 'http://139.59.91.96:9000/v1/login',
      body: {
        "username": user.username,
        "password": user.password
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
})
  })

});
