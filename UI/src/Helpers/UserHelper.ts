import {User} from '@firebase/auth';
import { request } from 'http';
import { Constants } from '../Constants';
import Questionaire from '../pages/Questionaire/Questionaire';

export module UserHelper {

    /**
     * get UID of current user
     * @param currentUser current Firebase User
     * @returns id 
     */
    export function getPetgoUserUid(currentUser: User) : string {
        return currentUser.uid;
    }

    /**
     * get Url to get more UserInformation
     * @param currentUser current Firebase User
     * @returns url 
     */
    export function getCurrentUserUrl(currentUser: User) {
        return `${Constants.baseUrl}getUser?uid=${getPetgoUserUid(currentUser)}`;
    }

    /**
     * get current petgo user as JSON
     * @param currentUser current Firebase user
     * @returns current petgo user as JSON
     */
    export async function getCurrentUser(currentUser: User) : Promise<string> {
        return new Promise((resolve, reject) => {
            fetch(getCurrentUserUrl(currentUser)).then((res) => {
                console.log('resolve');
                resolve(res.text());
            }).catch((err : string) => {
                console.log('reject');
                reject(err);
            });
        });
    }

    /**
     * Get questionaire as JSON
     * @param currentUser current Firebase User
     * @param successcallback Method on success
     * @param errorCallback Method on error
     */
    export function getQuestionaireAsJSON(currentUser: User, successcallback: (json: string) => void, errorCallback: (error: string) => void) : void {
        fetch(getCurrentUserUrl(currentUser))
        .then((res) => res.text())
        .then((questionaire: string) => {
            successcallback(questionaire);
        }).catch((err: string) => {
            errorCallback(err);
        });
    }

    /**
     * get Qoestionaire as object
     * @param currentUser current Firebase user
     * @returns questionaire
     */
    export async function getQuestionaire(currentUser: User): Promise<object>{
        return new Promise((resolve, reject) => {
            getQuestionaireAsJSON(currentUser, (data) => {
                try {
                    resolve(JSON.parse(data));
                }
                catch {
                    reject("An error occured");
                }
            }, (error) => {console.log(error); reject(error);});
        });

    }
}