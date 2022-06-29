import decoratePage from '../../lib/logger';
import BasePage from './basePage';

class LoginPage extends BasePage{
    constructor(page, pageRootSelector = 'LoginPage') {
        super(page);
        this.rootSelector = pageRootSelector;
        this.passwordField = '#password';
        this.usernameField = '#username';
        this.loginButton = '.is-primary';
        this.errorMessageSelector = '#app > div.no-auth-wrapper > div > section.content > div:nth-child(1) > div:nth-child(4) > div > div';

    }
    async signIn (username, password) {
        await this.page.click(this.usernameField);
        await this.page.fill(this.usernameField, username);
        await this.page.click(this.passwordField);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
    async getErrorText () {
        const text = await super.getTextContent(this.errorMessageSelector);
        return text;
    }
}

decoratePage(LoginPage);

export default LoginPage;
