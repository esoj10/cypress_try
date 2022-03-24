describe("in google", () => {
    it("try to search some", () => {
        cy.visit("https://www.google.com/");
        cy.get('input[name="q"]').type("pokemon");
        cy.get("div[class='CqAVzb lJ9FBc'] input[name='btnK']").click();
        cy.get('#search a').invoke('attr', 'href').then((href) => console.log(href));
        //cy.get("//input[@aria-label='Search']").nextAll().should('have.value', 'pokemon')
    })
})