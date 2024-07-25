import { Router } from "express";
import { deleteUser, getUserById, getUserByRecovery, getUserData, signinUser, signupUser, updateUser, updateUserPassword } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkUniqueEmail.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { userValidation } from "./user.validation.js";
import { dataValidate } from "../../middleware/dataValidate.js";

let userRouter = Router()

userRouter.post("/signup", checkEmail, dataValidate(userValidation), signupUser)
userRouter.post("/signin", signinUser)
userRouter.put("/update", verifyToken, checkEmail, updateUser)
userRouter.delete("/delete", verifyToken, deleteUser)
userRouter.get("/", verifyToken, getUserData)
userRouter.get("/:id", getUserById)
userRouter.get("/getusers/byrecovery", getUserByRecovery)
userRouter.put("/updatePassword", verifyToken, updateUserPassword)

export default userRouter


