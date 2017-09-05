const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  mongodbUri: 'mongodb://localhost:27017/universityprofiles',
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  hostname: 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
  get hostnameUrl() {
    return `http://${this.hostname}:${this.port}`;
  }
};
