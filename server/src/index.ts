import { json } from "body-parser";
import cors from "cors";
import express from "express";
import router from "./routes/router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", router);

app.listen(3001);
