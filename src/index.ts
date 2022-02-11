import { inversifyExpressServer } from '@core/container/inversify-container';
import App from './app';

const app = new App(inversifyExpressServer);
app.start();
