import dotenv from 'dotenv';
import App from './App';
import albumHandle from './routes/AlbumRoutes';
import userHandle from './routes/UserRoutes';
import genreHandle from './routes/GenreRoutes';
import musicHandle from './routes/MusicRoutes';

dotenv.config();

const expressApp: App = new App([
  userHandle,
  albumHandle,
  musicHandle,
  genreHandle,
]);

expressApp.init().listen();
