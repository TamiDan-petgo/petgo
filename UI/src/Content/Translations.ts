import IDictionary from '../Interfaces/IDictionary';
export module Translations {
    //#region applicationValues
    export const petgo: IDictionary<string> = {
        de: "petgo", 
        en: "petgo"
    }

    export const loading: IDictionary<string> = {
        de: "Lade",
        en: "Loading"
    }
    //#endregion
    //#region defaultTranslations
    export const dontHaveAnAccountYet: IDictionary<string> = {
        de: "Noch kein Account?", 
        en: "Don't have an Account yet?"
    }

    export const AlreadyHaveAnAccount: IDictionary<string> = {
        de: "Hast du schon ein Konto?", 
        en: "Do you already have an account?"
    }

    export const house: IDictionary<string> = {
        de: "Haus", 
        en: "House"
    }

    export const apartment: IDictionary<string> = {
        de: "Wohnung", 
        en: "Apartment"
    }

    export const residentialProperty: IDictionary<string> = {
        de: "Eigentum",
        en: "Property"
    }

    export const rent: IDictionary<string> = {
        de: "Miete",
        en: "Rent"
    }

    export const signIn: IDictionary<string> = {
        de: "Login",
        en: "Sign in"
    }

    export const signUp: IDictionary<string> = {
        de: "Registrieren",
        en: "Sign up"
    }
    //#endregion
    //#region errorTexts
    export const passowrdsNotEqual: IDictionary<string> = {
        de: "Die Passwörter stimmen nicht überein",
        en: "The passwords are not equal"
    }
    //#endregion
    //#region placeholders
    export const emailPlaceholder: IDictionary<string> = {
        de: "mmustermann@mustermail.de", 
        en: "jondoe@examplemail.com"
    }

    export const passwordPlaceholder: IDictionary<string> = {
        de: "Passowort",
        en: "Password"
    }

    export const repeatPasswortPlaceholder: IDictionary<string> = {
        de: "Passwort wiederholen",
        en: "Repeat password"
    }
    //#endregion
    //#region countries
    export const Germany: IDictionary<string> = {
        de: "Deutschland", 
        en: "Germany"
    }

    export const OtherEuropeanCountry: IDictionary<string> = {
        de: "EU-Ausland", 
        en: "Other European country"
    }

    export const NonEuropeanCountry: IDictionary<string> = {
        de: "Nicht-EU-Ausland", 
        en: "None European country"
    }
    //#endregion
}