import {Router} from "express";
import {userRouter} from "./userRouter";
import teacherRouter from "./teacherRouter";
const router = Router();
router.use('/teachers', teacherRouter)
router.use('/', userRouter)
export default router;