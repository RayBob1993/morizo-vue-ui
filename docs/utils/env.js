const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const envToBoolean = env => Boolean(env && env.toLowerCase() !== 'false' && env !== '0');

export {
  isDevelopment,
  isProduction,
  envToBoolean
};
