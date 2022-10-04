import 'dotenv/config';
import databaseConnect from '@/services/database';
import initializeServer from '@/services/server';
import routers from '@/routes';

export const startServer = async () => {
  await databaseConnect();
  await initializeServer(routers);
};

export default startServer();
