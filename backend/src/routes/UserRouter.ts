import express, { Router } from 'express';
import { Questionaire } from '../Classes/Questionaire';
import { User } from '../Classes/User';
import { EnumLivingSituation } from '../CustomEnums/EnumLivingSituation';

let router: express.Router = express.Router();

/**
 * get current User
 */
router.get('/getUser', async (req: express.Request, res: express.Response) => {
    let uid: string | any  = req.query.uid;
    let result: string = await getUserName(uid).catch((err) => {return err});
    res.send(result);
});

function getUserName (uid: string) : Promise<string> {
    return new Promise((resolve, reject) =>  {
        let user : User = new User("Hans Dieter", uid);
        //let q: Questionaire = new Questionaire(null, EnumLivingSituation.HouseOwner, false, true, true, true, true, 0, 0, false, "Mama", "none", false, "");
        //user.Questionaire = q;
        if(user.getID() == uid){
            resolve(JSON.stringify(user.Questionaire));
        }
        else 
            reject("Herbert");
    });
}
module.exports = router;