import express, {Application, Request, Response, NextFunction} from 'express';

const port: string = process.env.PORT || "3000";
const app : Application = express();

app.listen(port, () => {
    console.log('server ready');
});