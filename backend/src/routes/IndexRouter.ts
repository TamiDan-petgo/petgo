import express from "express";

let router : express.Router = express.Router();

router.get('/', (req, res) => {
    res.send(getContent());
});

router.get('/index', (req, res) => {
    res.send(getContent());
})

function getContent() : string {
    return "Route is working fine";
}

module.exports = router;