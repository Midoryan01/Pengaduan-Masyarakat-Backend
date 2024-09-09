import express from "express";
import fileUpload from "express-fileupload";
import Router from "./routes/Route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express()
const port = 5000;

dotenv.config();

app.use(cors());


app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"))
app.use(cookieParser());
app.use(Router);

app.listen(port, () => console.log(`serve berjalan di http://localhost:${port}`))

