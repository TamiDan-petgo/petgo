import { randomUUID } from "crypto";
import { EnumLivingSituation } from "../CustomEnums/EnumLivingSituation";

/**
 * stores Answert to the Questionaire
 */
export class Questionaire  {
    /**
     * ID of the Questionaire
     */
    private ID : string;

    /**
     * Living Situation
     */
    public LivingSituation : EnumLivingSituation;

    /**
     * Is there a Garden?
     */
    public HasGarden : boolean;

    /**
     * Is there a Balcony?
     */
    public HasBalcony : boolean;

    /**
     * Is the balcony safe for pets?
     */
    public IsBalconySafe : boolean;

    /**
     * Is the current Landlord okay with pet adoption.
     */
    public IsLandlordOkay : boolean;

    /**
     * Are all family members okay with pet adoption?
     */
    public AreFamilyMembersOkay : boolean;

    /**
     * Number of Children in Household
     */
    public NumberOfChildren : number;

    /**
     * How many hours would the pet be home alone a day?
     */
    public NumberOfHoursAlone : number;

    /**
     * Is anybody in the household allergic to pets?
     */
    public IsAnyOneAllergic : boolean;

    /**
     * Who cares about the pet when you cannot.
     */
    public WhoCaresIfYouCant : string;

    /**
     * Areas that are taboo for the pet
     */
    public TabooAreas: string;

    /**
     * Have you Ever euthanazied a pet?
     */
    public HaveYouEverEuthanized : boolean;

    /**
     * Reason for putting pet down
     */
    public EuthanizationReason: string;

    /**
     * Constructor of Questionaire
     * @param id ID of the Questionaire
     * @param livingSituation Living Situation
     * @param hasGarden Has Garden
     * @param hasBalcony Has Balcony
     * @param isBalconySave Is Balcony safe for pets?
     * @param isLandLordOkay Is Landlord okay with pet adoption?
     * @param familyMembersOkay Are all Family members okay with pet adoption?
     * @param numberOfChildren How many Children are in the Household?
     * @param numberOfHoursAlone How Many hours will the pet be alone per day?
     * @param isAnyoneAllergic Is anyone allergic to pets?
     * @param additionalCarePerson Who cares for the pet when you cannot?
     * @param tabooAreas Are there Taboo Areas for the pet?
     * @param everEuthanized  Have you ever put a pet down?
     * @param euthanizationReason Why did you put the pet down?
     */
    constructor(id : string|null, livingSituation : EnumLivingSituation, hasGarden: boolean, hasBalcony: boolean, 
        isBalconySave : boolean| null, isLandLordOkay : boolean, familyMembersOkay : boolean, numberOfChildren: number|null, 
        numberOfHoursAlone: number, isAnyoneAllergic : boolean, additionalCarePerson: string, tabooAreas: string, 
        everEuthanized: boolean, euthanizationReason: string) {
        this.ID = id ?? randomUUID();
        this.LivingSituation = livingSituation;
        this.HasGarden = hasGarden;
        this.HasBalcony = hasBalcony;
        this.IsBalconySafe = isBalconySave ?? false;
        this.IsLandlordOkay = isLandLordOkay;
        this.AreFamilyMembersOkay = familyMembersOkay;
        this.NumberOfChildren = numberOfChildren ?? 0;
        this.NumberOfHoursAlone = numberOfHoursAlone;
        this.IsAnyOneAllergic = isAnyoneAllergic;
        this.WhoCaresIfYouCant = additionalCarePerson;
        this.TabooAreas = tabooAreas;
        this.HaveYouEverEuthanized = everEuthanized;
        this.EuthanizationReason = euthanizationReason;
    }
}