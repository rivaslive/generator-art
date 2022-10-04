import path from 'path';

export const GOOGLE_CLIENT_ID = process.env.APP_GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.APP_GOOGLE_SECRET;
export const authKey = process.env.AUTH_KEY || 'TODO';
export const rootPath = path.resolve('./');
export const publicPath = path.resolve(rootPath, 'public');
export const DATABASE_URI = process.env.DATABASE_URI ?? '';
export const PORT = process.env.PORT ?? 8080;
export const SERVER_URL = process.env.SERVERL_URL || `http://localhost:${PORT}`;
export const ASSETS_URL = `${SERVER_URL}/public`;
