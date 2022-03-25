import litteraPage from "@pages/littera.page";
import LitteraPage from "@pages/littera.page"

describe("in littera", () => {
    beforeEach(() => {
        cy.visit(litteraPage.devURL);
        LitteraPage.LoginOrgAdmin()
    })
    it("try to login", () => {
        cy.get("button[type='submit']").should('not.be.visible');
    })
})