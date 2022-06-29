import chai from 'chai';
import {run, stop} from '../../lib/browser';
import app from '../../framework/pages/indexClass';

const assert = chai.assert;

describe ('Верстка страницы текущих задач', () => {
    const VALID_LOGIN = 'demo';
    const VALID_PASSWORD = 'demo';

    let page; let myApp;

    beforeEach( async () => {
        page = await run('https://try.vikunja.io/');
        myApp = app(page);
    });
    afterEach(async() => {
        await stop();
    });

    it ('Проверка вёрстки страницы текущих задач после логина', async () => {
        await myApp.Login().signin(VALID_LOGIN, VALID_PASSWORD);
        // TODO: заставить работать
        // await myApp.Home().toMatchSnapshot();
    });
});
