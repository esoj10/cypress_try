import Page from "./page";

class FacePage extends Page {
    get URL() {
        return "https://m.facebook.com/";
    }
    get btnStart() {
        return "._4n43";
    }

    get inputEmail() {
        return '#m_login_email';
    }
    get inputPassword() {
        return '#m_login_password';
    }
    get inputFirstSearch() {
        return '._7i-0';
    }
    get inputSearch() {
        return '#main-search-input';
    }
    get btnSumit() {
        return "._54k8";
    }

    login() {
        cy.fixture('facebook.json').then((faceUser) => {
            const user = faceUser.joseUser
            cy.get(this.btnStart).click()
            cy.get(this.inputEmail).type(user.email);
            cy.get(this.inputPassword).type(user.password);
            cy.get(this.btnSumit).click();
        })

    }
}

export default new FacePage();