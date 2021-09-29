import express from 'express';

import './config/dotenv';
import './database';

import { errorHandler } from './middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));