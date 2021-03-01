import {Router} from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SuverysController } from './controllers/SurveysController';
import {UserController} from './controllers/UserControllers';

const router = Router();

const userController = new UserController();
const suverysController = new SuverysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);

router.post("/surveys", suverysController.create);
router.get("/surveys", suverysController.show);

router.post("/sendMail", sendMailController.execute);


export {router};