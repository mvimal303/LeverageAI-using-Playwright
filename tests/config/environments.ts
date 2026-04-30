export const ENVIRONMENTS = {
  development: {
    baseURL: 'http://the-internet.herokuapp.com',
    timeout: 5000,
  },
  staging: {
    baseURL: process.env.STAGING_URL || 'https://staging-the-internet.herokuapp.com',
    timeout: 5000,
  },
  production: {
    baseURL: process.env.PROD_URL || 'https://the-internet.herokuapp.com',
    timeout: 5000,
  },
};

export const getEnvironmentConfig = (env: string = 'development') => {
  return ENVIRONMENTS[env as keyof typeof ENVIRONMENTS] || ENVIRONMENTS.development;
};
