import express from "express";
import dotenv from "dotenv";
import {errorMidHandler} from "./middlewares/error.middleware.js";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 4040;
dotenv.config();

app.use(express.json());

app.use(routes)

app.use(errorMidHandler);

app.all("/*" , (req , res)=>{
  res.status(404).json({
    message : "URL not found"
  })
})

app.listen(PORT, console.log(PORT));
