export module EnumHelper {

    /**
     * Parse enum to array
     * @param theEnum value to parse, ONLY ENUMS
     * @returns enum as array
     */
    export function toArray(theEnum : any) {
        return Object.keys(theEnum)
            .map(key => theEnum[key]);
    }
}