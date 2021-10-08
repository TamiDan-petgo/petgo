import { Settings } from "http2";

/**
 * Model of Translation Objects.
 */
export class TranslationModel {
    /**
     * ID of the translation (GUID)
     */
    public ID : string;

    /**
     * German translation.
     */
    public LANG_DE : string;

    /**
     * English translation
     */
    public LANG_EN : string;


    constructor(id: string, de: string, en : string) {
        this.ID = id;
        this.LANG_DE = de;
        this.LANG_EN = en;
    }
}