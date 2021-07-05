import dotenv from 'dotenv';
import App from './App';
import userHandle from './routes/userRoutes';

dotenv.config();

const expressApp: App = new App([userHandle]);

expressApp.init().listen();
