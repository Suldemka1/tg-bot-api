import { Router } from "express";
import { UserController } from "../modules/user/user.controller.js";
import { UserService } from "../modules/user/user.service.js";
import { UserRepository } from "../modules/user/user.repository.js";
import { db } from "../modules/database/connection.js";

const router = Router()

const userRepository = new UserRepository(db)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

router.post("/register", userController.signUp)
router.post("/auth", userController.signIn)

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.patch("/:id", userController.update)
router.delete("/:id", userController.delete)

export {router as userRouter}