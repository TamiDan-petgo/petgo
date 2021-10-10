import TranslationHelper from "../Helpers/TranslationHelper";
import { EnumBase } from "./EnumBase";

/**
 * custom Enum used for CountrySelection
 */
export class EnumLivingSituation extends EnumBase {
    private static AllValues : EnumLivingSituation[] = [];

    constructor(id?: string, translation?: string) {
        super(id, translation);
        EnumLivingSituation.AllValues.push(this);
    }

    public static getEnumValueById(id: string) : EnumLivingSituation | undefined{
        return this.AllValues.find(ff => ff.ID.toUpperCase == id.toUpperCase);
    }

    public static getAllValues() : EnumLivingSituation[]{
        return this.AllValues;
    }

    //Enum value.
    public static readonly HouseOwner: EnumLivingSituation = new EnumLivingSituation("ea7fc482-fe66-47be-b9e5-f18444adb440", "245d3947-a9a0-42e5-a0f5-ad7c671f87c9");
    //Enum value.
    public static readonly HouseRent: EnumLivingSituation = new EnumLivingSituation("c3901f58-1456-4928-9dac-ffad6b0d2d61", "cd4d0da9-773b-4178-9d9a-c34dcc7b5ee8");
    //Enum value.
    public static readonly FlatOwner: EnumLivingSituation = new EnumLivingSituation("b446a962-a9e1-4cbd-b68c-042b49201d76", "3e5543db-1bba-448b-a6f3-fddcf6897cfa");
    //Enum value.
    public static readonly FlatRent: EnumLivingSituation = new EnumLivingSituation("22415bbe-ba01-4c80-b948-bfb39703768e", "233ef210-2d3a-468b-9a98-2070385c7a00");
}