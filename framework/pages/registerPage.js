import decoratePage from '../../lib/logger';
import BasePage from './basePage';

class RegisterPage extends BasePage{
    constructor(page, pageRootSelector = 'LoginPage') {
        super(page);
        this.rootSelector = pageRootSelector;
        this.passwordField = '#password';
        this.usernameField = '#username';
        this.emailField = '#email';
        this.loginButton = '.is-primary';
    }
    async signUp (username, email, password) {
        await this.page.click(this.usernameField);
        await this.page.fill(this.usernameField, username);

        await this.page.click(this.emailField);
        await this.page.fill(this.emailField, email);

        await this.page.click(this.passwordField);
        await this.page.fill(this.passwordField, password);

        await this.page.click(this.loginButton);
    }
}

decoratePage(RegisterPage);

export default RegisterPage;
