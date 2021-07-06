import dotenv from 'dotenv';
import App from './App';
import albumHandle from './routes/AlbumRoutes';
import userHandle from './routes/UserRoutes';

dotenv.config();

const expressApp: App = new App([userHandle, albumHandle]);

expressApp.init().listen();
