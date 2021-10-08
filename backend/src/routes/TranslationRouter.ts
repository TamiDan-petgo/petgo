import express, { Router } from 'express';
import TranslationHelper from '../Helpers/TranslationHelper';

let router: express.Router = express.Router();

/**
 * get translated value.
 */
router.get('/getTranslation', async (req: express.Request, res: express.Response) => {
    let id: string | any  = req.query.id;
    let language : string | any = req.query.language; 
    let result: string = await TranslationHelper.getTranslation(id, language);
    res.send(result);
});

module.exports = router;