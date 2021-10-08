export module TranslationHelper{
    /**
     * basUrl of application
     */
    const baseUrl: string = "http://localhost:9000/";

    /**
     * german language code
     */
    export const lang_de : string = "LANG_DE";

    /**
     * english language code
     */
    export const lang_en : string = "LANG_EN";

    function getBaseUrl(): string{
        return baseUrl;
    }

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
            let url: string = getBaseUrl() + `getTranslation?id=${id}&language=${language}`;
            return url;
        }
        return "";
    }
}