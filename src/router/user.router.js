import { Router } from "express";
import { UserController } from "../modules/user/user.controller.js";

const router = Router()

const userController = new UserController()

router.post("/register", userController.signUp)
router.post("/auth", userController.signIn)

export {router as userRouter}