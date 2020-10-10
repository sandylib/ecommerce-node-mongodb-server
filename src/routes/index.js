import { Router } from "express";
import user from './user';
import zodiac from './chinese-zodiac'

const routes = Router();

routes.use('/user', user);
routes.use('/zodiac', zodiac);

export default routes;