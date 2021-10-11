import { Constants } from "../Constants";

export module TranslationHelper{

  /**
   * german language code
   */
  export const german: string = "de";

  /**
   * english language code
   */
  export const english: string = "en";

  /**
   * get Language ()
   * @returns language of user (currently always the browser's language)
   */
  export function getLanguage(): string{
    return getBrowserLanguage();
  } 
  
  /**
   * Get language of browser
   * @returns language of browser, default: english
   */
    export function getBrowserLanguage() : string {
        let navigatorLanguage: string = navigator.language;
        return (navigatorLanguage.indexOf(german) >= 0 ? german : english);
    }
}