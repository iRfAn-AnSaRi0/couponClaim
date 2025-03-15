import express from 'express';
import cookieparser from "cookie-parser";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ limit: "24kb", extended: true }));
app.use(cookieparser());

import { router } from './routes/Route.js';

app.use("/v2", router)

export { app };
