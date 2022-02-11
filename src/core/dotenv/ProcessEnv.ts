import dotenv from 'dotenv';
class ProcessEnvVariable {
  public config: dotenv.DotenvConfigOutput = dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const DotenvConfig = new ProcessEnvVariable();

export default DotenvConfig.config;
