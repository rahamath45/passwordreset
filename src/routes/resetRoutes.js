
import {Router} from "express";
import { forgotpassword, resetpassword } from "../controllers/resetController.js";

const resetRouter = Router();

resetRouter.post("/forgot-password",forgotpassword);
resetRouter.post("/reset-password/:token",resetpassword)

export default resetRouter;