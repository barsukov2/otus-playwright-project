import decoratePage from '../../lib/logger';
import BasePage from './basePage';
import RightMenu from '../elements/index'
import {expect} from "@playwright/test";

class HomePage extends BasePage{
    constructor(page, pageRootSelector ='HomePage') {
        super(page);
        this.rootSelector = pageRootSelector;
        this.profileNameField = '.navbar-end > .user > .dropdown > .base-button > .username';
        this.profileSelector = '.navbar-end > .user > .dropdown > .base-button > .icon';
        this.logoutField = '.user > .dropdown > .dropdown-menu > .dropdown-content > .base-button:nth-child(4)';
        this.addTaskField = '.content > .task-add > .field > .control > .add-task-textarea';
        this.addTaskButton = '.task-add > .field > .control > .base-button > .button-text';
        this.taskListSelector = '#app > div.content-auth > div > main > div > div.is-max-width-desktop.has-text-left.mt-4 > div > div > div > div';

    }
    async getProfileName () {
        const profileNameText = await super.getTextContent(this.profileNameField);
        return profileNameText;
    }
    async getCurrentTasksList () {
        const taskListText = await super.getTextContent(this.taskListSelector);
        return taskListText;
    }

    async addTask (taskName) {
        await this.page.click(this.addTaskField);
        await this.page.fill(this.addTaskField, taskName);
        await this.page.click(this.addTaskButton);
    }
    async logout () {
        await this.page.click(this.profileSelector);
        await this.page.click(this.logoutField);
    }
    async toMatchSnapshot () {
        await expect(this.page).toHaveScreenshot();
    }
}
decoratePage(HomePage);

export default HomePage;
