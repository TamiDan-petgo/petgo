import TranslationHelper from "../Helpers/TranslationHelper";
import { EnumBase } from "./EnumBase";

/**
 * custom Enum used for CountrySelection
 */
export class EnumCountry extends EnumBase {
    private static AllValues : EnumCountry[] = [];

    constructor(id?: string, translation?: string) {
        super(id, translation);
        EnumCountry.AllValues.push(this);
    }

    public static getEnumValueById(id: string) : EnumCountry | undefined{
        return this.AllValues.find(ff => ff.ID.toUpperCase == id.toUpperCase);
    }

    public static getAllValues() : EnumCountry[]{
        return this.AllValues;
    }

    //Enum value.
    public static readonly Germany: EnumCountry = new EnumCountry("c9047166-d12a-4f58-8cdc-04c7a887b3e0", "65b8f804-9552-4f0d-9733-40aa5f6ee0c8");
    //Enum value.
    public static readonly Europe: EnumCountry = new EnumCountry("4f650dda-1a14-473d-9a74-33b31d747317", "3643e202-fa96-4505-8c86-adabe8d61670");
    //Enum value 
    public static readonly NonEurope: EnumCountry = new EnumCountry("818231f2-1804-4733-86ca-abb998afcd8a", "f0ac36b5-758a-467b-95d3-0a829a1b4672");
}