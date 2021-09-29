import { Router, Request, Response } from 'express';

const AppRoutes = Router();

AppRoutes.get('/', (request: Request, response: Response) => {
    return response.send('Route OK');
})

export default AppRoutes;