import * as csvParse from 'csv-parse';
import fs = require("fs");
import { TranslationModel } from '../Models/TranslationModel';
import firebaseDB from '../Firebase';
import {QuerySnapshot} from 'firebase/firestore';
import { TransformCallback } from 'stream';
import { resolve } from 'path/posix';

module TranslationHelper {

    /**
     * Gets translation from Firebase.
     * @param id id of translation
     * @returns Translation
     */
    export async function getTranslation(id: string, language: string = "LANG_EN"): Promise<string>{
        return new Promise(async (resolve, reject) => {
            if(id != undefined && language != undefined){
                let translationFound : boolean = false;
                let translation : string = "";

                let snapshot: QuerySnapshot = await firebaseDB.collection("Translations").where("ID", "==", id).get();
                if(!snapshot.empty){
                    let translationFound: boolean = false;
                    let translation : string = "";
                    snapshot.forEach((doc) => {
                        if(!translationFound && doc.exists){
                            try{
                                translation = doc.get(language);
                                translationFound = true;
                            }
                            catch(err: any) {
                                reject(err);
                            }
                        }
                    });
                    resolve(translation);
                }
                else {
                    reject("snapshot was empty!");
                }
            }
            else {
                reject('Values are missing!');
            }
        });
    }
    
    /**
     * sets translations to Firebase, so they can be accessed fast and easily.
     */
    export async function setTranslations(): Promise<boolean> {
        let [dataCsv, dataFirebase] = await Promise.all([readCSV(), getFirebaseTranslation()]);
        return new Promise((resolve, reject) => {
            dataCsv.forEach((translation: TranslationModel) => {
                let exists: boolean = dataFirebase.find(ff => ff.ID == translation.ID) == null || undefined ? false : true;
                if(!exists) {
                    console.log(translation.LANG_DE);
                    firebaseDB.collection('Translations').add({
                        ID: translation.ID, 
                        LANG_DE: translation.LANG_DE,
                        LANG_EN: translation.LANG_EN,
                    });
                }
            });
            resolve(true);
        });
    }
    
    async function readCSV(): Promise<TranslationModel[]> {
        return new Promise((resolve, reject) => {
            let translations : TranslationModel[] = [];
            fs.createReadStream('content/translations.csv', {'encoding': 'utf-8'})
            .pipe(csvParse.default({delimiter: ';'}))
            .on('data', (data) => {
                var tm : TranslationModel = new TranslationModel(data[0], data[1], data[2]);
                translations.push(tm);
            });
            resolve(translations);
        });
    }
    
    function getFirebaseTranslation() : Promise<TranslationModel[]> {
        return new Promise((resolve, reject) => {
            firebaseDB.collection('Translations').get().then((doc: QuerySnapshot) => {
                if(!doc.empty){
                    let data: TranslationModel[] = [];
                    doc.forEach(document =>{
                        let tm : TranslationModel = new TranslationModel(document.get("ID"), document.get("DE"), document.get("EN"));
                        data.push(tm);
                    });
                    resolve(data);
                }
                else {
                    reject('empty!');
                }
            }).catch((err: string) => {
              reject(err);
            });
        })
      }
}

export default TranslationHelper;
