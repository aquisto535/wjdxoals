import express from "express";
import { getdata } from "../controllers/datacontroller";

const dataRouter = express.Router();

dataRouter.get("/add", getdata);

export default dataRouter;
