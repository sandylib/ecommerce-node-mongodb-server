import { Router } from "express";

import  zodiac from './chinese-zodiac';


const routes = Router();

routes.use(zodiac);

export default  routes;