import dotenv from 'dotenv';
import App from './App';
import userHandle from './routes/UserRoutes';

dotenv.config();

const expressApp: App = new App([userHandle]);

expressApp.init().listen();
