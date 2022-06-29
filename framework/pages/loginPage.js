import decoratePage from '../../lib/logger';
import BasePage from './basePage';

class LoginPage extends BasePage{
    constructor(page, pageRootSelector = 'LoginPage') {
        super(page);
        this.rootSelector = pageRootSelector;
        this.passwordField = '#password';
        this.usernameField = '#username';
        this.loginButton = '.is-primary';
    }
    async signin (username, password) {
        await this.page.click(this.usernameField);
        await this.page.fill(this.usernameField, username);
        await this.page.click(this.passwordField);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}

decoratePage(LoginPage);

export default LoginPage;
