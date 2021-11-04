export class IconSelectionScreenModel {
    /**
     * Icon of selection element
     */
    Icon: string;

    /**
     * Label of selection element 
     */
    Label: string;

    /**
     * Value of Selection element
     */
    Value: any;

    /**
     * Is this selection element default
     */
    IsDefault: boolean;

    /**
     * 
     * @param icon Icon of the selection element
     * @param label Label of the selection element
     * @param value Value of the selection element
     * @param isDefault Is this selection element default
     */
    constructor(icon: string, label: string, value: any, isDefault: boolean = false){
        this.Icon = icon; 
        this.Label = label; 
        this.Value = value;
        this.IsDefault = isDefault; 
    }
}