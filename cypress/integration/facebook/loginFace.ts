describe("in littera", () => {
    beforeEach(() => {
        cy.LoginFacebook({
            "email": "josebarra10@hotmail.com",
            "password": "josexdrxdr1010"
        })
        cy.wait(5000)
    })
    it("try to scroll down", () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, 500);
    })
    it("try to search people", () => {
        cy.get('._7i-0').type('zhou zheng');
        cy.get('#main-search-input').clear();
        cy.get('#main-search-input').type('david vargas');
        cy.get('#main-search-input').clear();
        cy.get('#main-search-input').type('jose barrantes araya');
    })
})

