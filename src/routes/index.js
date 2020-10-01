import { Router } from "express";
import profile from './user/profile';

const routes = Router();

routes.use('/user',profile);


const rootRouter = Router();
export default rootRouter.use('/', routes);