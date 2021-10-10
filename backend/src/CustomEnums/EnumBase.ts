import { type } from "os";
import { stringify } from "querystring";
import { TransformCallback } from "stream";
import TranslationHelper from "../Helpers/TranslationHelper";

export class EnumBase {
    // ID of Enum Value
    public ID : string;

    // ID of Translation in Enum
    public Translation: string;

    //constructor of Enum value
    constructor(id?: string|null, translation?: string|null){
        if(id != null){
            this.ID = id;
        }
        else {
            this.ID = "";
        }

        if(translation != null){
            this.Translation = translation;
        }
        else {
            this.Translation = "";
        }
    }

    // Translate Enum Value
    public async Translate(languageCode? : string) : Promise<string> {
        return await TranslationHelper.getTranslation(this.Translation, languageCode);
    }

    public ToString() : string {
        return this.ID;
    }
}

interface StringToCustomerMap {
    [id: string]: string;
}