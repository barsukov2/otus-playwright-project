import chai from 'chai';

import {run, stop} from '../../lib/browser';
import app from '../../framework/pages/indexClass';
import {faker} from "@faker-js/faker";
const expect = chai.expect;

describe ('Авторизация', () => {
    const VALID_LOGIN = 'demo';
    const VALID_PASSWORD = 'demo';

    let page;
    let myApp;

    beforeEach( async () => {
        page = await run('https://try.vikunja.io/');
        myApp = app(page);
        await myApp.Login().signin(VALID_LOGIN, VALID_PASSWORD);
    });
    afterEach(async() => {
        await stop();
    });

    it ('Создать задачу', async () => {
        const string = faker.datatype.uuid()
        await myApp.Home().addTask(string)
        let currentTasksList = await myApp.Home().getCurrentTasksList()
        expect(currentTasksList).to.contain(string);
    });
});
