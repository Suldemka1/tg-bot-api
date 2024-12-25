import { Router } from "express";
import { UserController } from "../modules/user/user.controller.js";
import { UserService } from "../modules/user/user.service.js";
import { UserRepository } from "../modules/user/user.repository.js";
import { db } from "../modules/database/connection.js";

const router = Router()

const userRepository = new UserRepository(db)
const userService = new UserService(userRepository)
const userController = new UserController(userService)
// РЕАЛИЗОВАТЬ МЕТОДЫ
router.post("/register", userController.signUp)
router.post("/auth", userController.signIn)

router.get("/",)
router.get("/:id")
router.patch("/:id")
router.delete("/:id")

export {router as userRouter}