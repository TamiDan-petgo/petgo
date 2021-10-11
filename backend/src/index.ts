import express, { Application, Request, Response, NextFunction, Router } from "express";
import { nextTick } from "process";
import { EnumCountry } from "./CustomEnums/EnumCountry";
import { EnumBase } from "./CustomEnums/EnumBase";

let indexRouter = require('./routes/IndexRouter');
let userRouter = require('./routes/UserRouter');

let cors = require("cors");

const port: string = process.env.PORT || "9000";
const app: Application = express();

app.get("/info", (req, res) => {
  res.send({ app: "petgo", status: "ok" });
});

app.listen(port, async () => {
  console.log("listening on port: " + port);
});

app.use(cors());
app.use("/", indexRouter);
app.use('/', userRouter);

module.exports = app;