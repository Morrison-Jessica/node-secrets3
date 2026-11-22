process.loadEnvFile();

const secret = process.env.APP_SECRET;

if (!secret) {
  throw new Error('Missing APP_SECRET');
}

console.log('Application started successfully. Secret is available.');
