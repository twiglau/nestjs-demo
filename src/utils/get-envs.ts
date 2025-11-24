import dotenv from 'dotenv';
export function getTest() {}

export function getEnvs() {
  const parsedConfig = {};
  const envFilePaths = ['.env', `.env.${process.env.NODE_ENV}`];

  envFilePaths.forEach((envFilePath) => {
    try {
      const config = dotenv.config({ path: envFilePath }).parsed;
      Object.assign(parsedConfig, config);
    } catch (error) {
      console.log(`Error loading ${envFilePath} file`, error);
    }
  });

  return parsedConfig;
}
