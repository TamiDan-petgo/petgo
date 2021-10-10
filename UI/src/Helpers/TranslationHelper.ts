import { Constants } from "../Constants";

export module TranslationHelper{
    /**
     * german language code
     */
    export const lang_de : string = "LANG_DE";

    /**
     * english language code
     */
    export const lang_en : string = "LANG_EN";

    /**
     * Get the user's broswer language
     * @returns the user's browser language, default is english
     */
    export function getBrowserLanguage() : string {
        let navigatorLanguage: string = navigator.language;
        let language: string = "lang_";

        if(navigatorLanguage.indexOf("de") >= 0) {
            language += "de";
        }
        else {
            language += "en";
        }

        return language.toUpperCase();
    }

    /**
     * Get url to fetch translation
     * @param id id of translation
     * @param languageCode language of translated value
     * @returns url to fetch translation
     */
    export function getTranslationUrl(id: string, languageCode : string = ""): string {
        if(id.length > 0){
            let language = languageCode.trim().length > 0 ? languageCode : getBrowserLanguage();
            let url: string = `${Constants.baseUrl}getTranslation?id=${id}&language=${language}`;
            return url;
        }
        return "";
    }

    /**
     * Gets translations of multiple IDs as keyValuePairs with the ID being the key
     * @param translationIDs 
     * @returns Promise<string> containing all translation values 
     */
    export async function getTranslations(translationIDs: string[], languageCode?: string): Promise<{[key: string]: string}>{
        return new Promise((resolve, reject) => {
          let translations: {[key: string]: string} = {};
          
          translationIDs.forEach((translation, index) => {
            fetch(TranslationHelper.getTranslationUrl(translation, languageCode))
            .then((res) => res.text())
            .then((translated: string) => {
              translations[translation] = translated;
              if(index == translationIDs.length - 1)
                resolve(translations);
            }).catch((err:string) => {
              let rejection: string = `error in translation with id ${translation}: \n ${err}`;
              reject(rejection);
            });
          });
        });
      }
}