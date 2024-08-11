import express from "express";
import { test } from "../controllers/user.controller.js"; // import the test api function

const router  = express.Router();

router.get('/', test); // using the test api function

export default router;