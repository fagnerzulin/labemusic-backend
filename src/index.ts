import dotenv from 'dotenv';
import App from './App';

dotenv.config();

const expressApp: App = new App([]);

expressApp.init().listen();
