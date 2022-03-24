declare namespace Cypress {
    interface Chainable<Subject> {
        LoginLittera: typeof LoginLittera
        LoginFacebook: typeof LoginFacebook
    }
}

function LoginLittera(user: any) {
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("button[type='submit']").click();


}

function LoginFacebook(user: any) {
    cy.visit("https://m.facebook.com/");
    cy.get('._4n43').click()
    cy.get("#m_login_email").type(user.email);
    cy.get("#m_login_password").type(user.password);
    cy.get('._54k8').click();
}

Cypress.Commands.add('LoginLittera', LoginLittera)
Cypress.Commands.add('LoginFacebook', LoginFacebook)