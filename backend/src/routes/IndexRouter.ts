import express from "express";

let router : express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send(getContent());
});

router.get('/index', (req: express.Request, res: express.Response) => {
    res.send(getContent());
})

function getContent() : string {
    return "Route is working fine";
}

module.exports = router;