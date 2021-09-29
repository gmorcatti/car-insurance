import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import './database';

const app = express();

app.get('/', (request, response) => {
    return response.send('API is Running 2312');
})

app.listen(3333, () => console.log('App is running'))