import Page from "./page";

class LitteraPage extends Page {
    get devURL() { return "https://dev.login.litteraeducation.com/"; }
    get stageURL() { return "https://staging.login.litteraeducation.com/"; }
    get btnSumit() {
        return "button[type='submit']";
    }

    get inputEmail() {
        return '#email';
    }
    get inputPassword() {
        return '#password';
    }

    LoginOrgAdmin() {
        cy.fixture('littera.json').then((data) => {
            const orgAdmin = data.orgAdmin;
            this.LoginLittera(orgAdmin);
        })
    }

    LoginLittera(user: any) {
        cy.get(this.inputEmail).type(user.email);
        cy.get(this.inputPassword).type(user.password);
        cy.get(this.btnSumit).click();
    }
}

export default new LitteraPage();