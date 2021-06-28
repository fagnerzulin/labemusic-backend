import express, { Router, Express } from 'express';
import cors from 'cors';

export interface AppRoute {
  path: string;
  handle: Router;
}

export default class App {
  private express: Express = express();
  private port: number = Number(process.env.PORT) || 3003;

  constructor(private routes: AppRoute[]) {}

  public init(): App {
    this.middlewares();
    this.routers();
    this.ping();
    return this;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routers() {
    this.routes.map(route => {
      this.express.use(route.path, route.handle);
    });
  }

  public listen() {
    this.express.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }

  private ping() {
    this.express.get('/ping', (_, res) => {
      res.send({ message: 'pong' });
    });
  }
}
