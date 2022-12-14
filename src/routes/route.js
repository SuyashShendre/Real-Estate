import express from "express";
const router = express.Router()

import User from "../controllers/user.js"

router.post("/register", User.register)
router.post("/login", User.login)

export default router;