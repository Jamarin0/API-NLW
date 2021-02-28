import {Router} from 'express';

const router = Router();

const UserController = new UserController();

router.post("/users", UserController.create);

export {router};