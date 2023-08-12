import {Router} from "express";
import auth from "../middleware/jwt";
import teacherController from "../controller/teacherController";
// import {AuthorizeMiddleware} from "../middleware/authorize.middleware";

const teacherRouter = Router();
// homeRouter.use(auth)
teacherRouter.get('/', teacherController.findAll);
teacherRouter.get('/:id', teacherController.findById);
// homeRouter.use(AuthorizeMiddleware.authorizedAdmin)
teacherRouter.post('', teacherController.add);
teacherRouter.put('/:id', teacherController.update);
teacherRouter.delete('/:id', teacherController.delete);
export default teacherRouter;