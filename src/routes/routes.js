import { Router } from "express";
import { getCourseDescription, getFilter, getFullASC, getFullCourse, getFullPress,  login, postOrganization, postPosts, postTime, select, updateTimeStatus } from "../controllers/main.js";
import upload from "../lib/multer.js"
import { verifyToken } from "../middleware/login.middeware.js";
const routes = Router();

export default routes
.get("/admin", verifyToken , getFullPress)
.get("/admin/ASC", verifyToken , getFullASC)
.get("/post/:id", getFullCourse)
.get("/select" , select)
.post("/filter" , getFilter)
.get("/description/:id" , getCourseDescription)
.post("/post/post" , upload.single("image") , postPosts)
.post("/post" ,  postTime)
.post("/post/fulldata" , postOrganization)
.post("/login" , login)
.put("/admin/status" , verifyToken , updateTimeStatus)
