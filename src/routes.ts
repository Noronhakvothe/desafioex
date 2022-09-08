import { errorMiddleware } from './middlewares/error';
import { PostController } from './controllers/PostController';
import { Router } from "express";
import { UserController } from "./controllers/UserController";


const routes = Router()

routes.post('/login', errorMiddleware, new UserController().login)

//criar usuario
routes.post('/', new UserController().create)
//editar usuario
//routes.put('/:id([0-9]+)', UserController.edit)
routes.post('//', PostController.create)

//routes.post('/login', UserController.login)

export default routes
