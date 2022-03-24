describe("in littera", () => {
    beforeEach(() => {
        cy.visit("https://dev.login.litteraeducation.com/");
        cy.LoginLittera({ "email": "chema@yopmail.com", "password": "Asdqwe123$" })
    })
    it("try to login", () => {
        cy.get("button[type='submit']").should('not.be.visible');
    })
})

