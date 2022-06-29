import chai from 'chai';
import {run, stop} from '../../lib/browser';
import app from '../../framework/pages/indexClass';
import {VALID_LOGIN, VALID_PASSWORD} from "../../framework/data/user";
import {faker} from "@faker-js/faker";
const assert = chai.assert;

describe ('Авторизация', () => {
    let page;
    let myApp;

    beforeEach( async () => {
        page = await run('https://try.vikunja.io/');
        myApp = app(page);
    });
    afterEach(async() => {
        await stop();
    });

    it ('Авторизоваться валидным пользователем', async () => {
        await myApp.Login().signIn(VALID_LOGIN, VALID_PASSWORD);
        const profileNameText = await myApp.Home().getProfileName();
        assert.strictEqual(profileNameText, 'demo', 'Имя пользователя не равно demo');
    });

    it ('Авторизоваться невалидным пользователем', async () => {
        const string = faker.datatype.uuid()
        await myApp.Login().signIn(string, string);
        const errorText = await myApp.Login().getErrorText()
        assert.strictEqual(errorText, 'Wrong username or password.', 'Сообщение об ошибке');
    });

    it ('Выйти залогиненным пользователем', async () => {
        await myApp.Login().signIn(VALID_LOGIN, VALID_PASSWORD);
        await myApp.Home().logout();
        const url = await myApp.Login().getUrl();
        assert.strictEqual(url, 'https://try.vikunja.io/login', 'Мы не на странице /login');
    });
});
