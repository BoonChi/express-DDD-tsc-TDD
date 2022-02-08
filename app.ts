import iocServer from './src/core/container/inversify-container';
import express from 'express'
import morgan from 'morgan';
import './src/core/dotenv/ProcessEnv'

const logger = morgan('combined')
iocServer.setConfig((app: express.Application) => {
  // config
  app.use(logger);
})
let app = iocServer.build();
app.listen(process.env['SERVER_PORT'], () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});

