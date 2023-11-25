import { Router } from 'express';
import { controller } from '../controller/Controller.js';
import { auth } from '../middlawares/auth.js';

const routes = Router();

routes.get("/users", auth.AuthMiddlaware, controller.findUsers)
routes.post("/create", controller.signUp)
routes.post("/signin", controller.signin)

export {routes}