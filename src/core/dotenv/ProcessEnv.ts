import dotenv from 'dotenv'
class ProcessEnvVariable {
  public config: dotenv.DotenvConfigOutput = dotenv.config()
}

const DotenvConfig = new ProcessEnvVariable();

export default DotenvConfig