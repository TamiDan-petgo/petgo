import express, { Application, Request, Response, NextFunction, Router } from "express";
import TranslationHelper from './Helpers/TranslationHelper';
import { nextTick } from "process";
import { EnumCountry } from "./CustomEnums/EnumCountry";
import { EnumBase } from "./CustomEnums/EnumBase";

let indexRouter = require('./routes/IndexRouter');
let translationRouter = require('./routes/TranslationRouter');
let userRouter = require('./routes/UserRouter');

let cors = require("cors");

const port: string = process.env.PORT || "9000";
const app: Application = express();

app.get("/info", (req, res) => {
  res.send({ app: "petgo", status: "ok" });
});

app.listen(port, async () => {
  console.log("listening on port: " + port);
  //update translations on listen
  await TranslationHelper.setTranslations()
  .then(() => {
    console.log("Server ready");
  }).catch((error) => {
    console.log(error);
  });
});

app.use(cors());
app.use("/", indexRouter);
app.use('/', translationRouter);
app.use('/', userRouter);

module.exports = app;