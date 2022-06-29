import chai from 'chai';
import {run, stop} from '../../lib/browser';
import app from '../../framework/pages/indexClass';
import { faker } from '@faker-js/faker';
const assert = chai.assert;

describe ('Регистрация', () => {
    let page;
    let myApp;

    beforeEach( async () => {
        page = await run('https://try.vikunja.io/register');
        myApp = app(page);
    });
    afterEach(async() => {
        await stop();
    });

    it ('Зарегистрироваться с валидными почтой, логином и паролем', async () => {
        const string = faker.datatype.uuid()
        await myApp.Register().signUp(string, string + "@demo.com", string)
        const profileNameText = await myApp.Home().getProfileName();
        assert.strictEqual(profileNameText, string, 'Имя пользователя равно логину');
    });
});
