import express  from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import routes from "./routes/routes.js";
import { resolve } from "path";
import { errorMidHandler } from "./middleware/error.middleware.js";

const app = express();
const Port = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(routes);
app.use("/", express.static(resolve("uploads")));

app.all("/*", (req, res) => {
  res.status(404).json({
    message: "URL not found",
  });
});

app.use(errorMidHandler);

app.listen(Port, console.log(`App listen ${Port}`));
