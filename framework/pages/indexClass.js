import HomePage from './homePage';
import LoginPage from './loginPage';
import RegisterPage from './registerPage'

const app = (page) => ({
   Home: () => new HomePage(page),
   Login: () => new LoginPage(page),
   Register: () => new RegisterPage(page),
});

export default app;
