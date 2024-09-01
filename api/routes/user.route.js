import express from "express";
import { test, updateUser } from "../controllers/user.controller.js"; // import the test api function
import { verifyToken } from "../utils/verifyUser.js";

const router  = express.Router();

router.get('/', test); // using the test api function
router.post('/update/:id', verifyToken, updateUser)

export default router;