import express from 'express';
import cors from 'cors';
import { PORT } from '@/config';

const app = express();
app.use(express.json());
app.use(cors());

const initializeServer = (routes?: any) => {
  if (routes) {
    app.use(routes);
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

export function createModuleRoute() {
  return express.Router();
}
export default initializeServer;
