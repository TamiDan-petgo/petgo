import { randomUUID } from "crypto";
import { EnumLivingSituation } from "../CustomEnums/EnumLivingSituation";

//smalltest
/**
 * stores Answert to the Questionaire
 */
export class Questionaire  {
    /**
     * ID of the Questionaire
     */
    private ID : string;

    public getID(): string {
        return this.ID;
    }

    public setID(ID: string): void {
        this.ID = ID;
    }

    /**
     * Living Situation
     */
    public LivingSituation : EnumLivingSituation;

    public getLivingSituation(): EnumLivingSituation {
        return this.LivingSituation;
    }

    public setLivingSituation(LivingSituation: EnumLivingSituation): void {
        this.LivingSituation = LivingSituation;
    }


    /**
     * Is there a Garden?
     */
    public HasGarden : boolean;

    public isHasGarden(): boolean {
        return this.HasGarden;
    }

    public setHasGarden(HasGarden: boolean): void {
        this.HasGarden = HasGarden;
    }


    /**
     * Is there a Balcony?
     */
    public HasBalcony : boolean;

    public isHasBalcony(): boolean {
        return this.HasBalcony;
    }

    public setHasBalcony(HasBalcony: boolean): void {
        this.HasBalcony = HasBalcony;
    }


    /**
     * Is the balcony safe for pets?
     */
    public IsBalconySafe : boolean;


    public isIsBalconySafe(): boolean {
        return this.IsBalconySafe;
    }

    public setIsBalconySafe(IsBalconySafe: boolean): void {
        this.IsBalconySafe = IsBalconySafe;
    }

    /**
     * Is the current Landlord okay with pet adoption.
     */
    public IsLandlordOkay : boolean;

    public isIsLandlordOkay(): boolean {
        return this.IsLandlordOkay;
    }

    public setIsLandlordOkay(IsLandlordOkay: boolean): void {
        this.IsLandlordOkay = IsLandlordOkay;
    }


    /**
     * Are all family members okay with pet adoption?
     */
    public AreFamilyMembersOkay : boolean;

    public isAreFamilyMembersOkay(): boolean {
        return this.AreFamilyMembersOkay;
    }

    public setAreFamilyMembersOkay(AreFamilyMembersOkay: boolean): void {
        this.AreFamilyMembersOkay = AreFamilyMembersOkay;
    }


    /**
     * Number of Children in Household
     */
    public NumberOfChildren : number;

    public getNumberOfChildren(): number {
        return this.NumberOfChildren;
    }

    public setNumberOfChildren(NumberOfChildren: number): void {
        this.NumberOfChildren = NumberOfChildren;
    }


    /**
     * How many hours would the pet be home alone a day?
     */
    public NumberOfHoursAlone : number;

    public getNumberOfHoursAlone(): number {
        return this.NumberOfHoursAlone;
    }

    public setNumberOfHoursAlone(NumberOfHoursAlone: number): void {
        this.NumberOfHoursAlone = NumberOfHoursAlone;
    }


    /**
     * Is anybody in the household allergic to pets?
     */
    public IsAnyOneAllergic : boolean;

    public isIsAnyOneAllergic(): boolean {
        return this.IsAnyOneAllergic;
    }

    public setIsAnyOneAllergic(IsAnyOneAllergic: boolean): void {
        this.IsAnyOneAllergic = IsAnyOneAllergic;
    }


    /**
     * Who cares about the pet when you cannot.
     */
    public WhoCaresIfYouCant : string;

    public getWhoCaresIfYouCant(): string {
        return this.WhoCaresIfYouCant;
    }

    public setWhoCaresIfYouCant(WhoCaresIfYouCant: string): void {
        this.WhoCaresIfYouCant = WhoCaresIfYouCant;
    }


    /**
     * Areas that are taboo for the pet
     */
    public TabooAreas: string;

    public getTabooAreas(): string {
        return this.TabooAreas;
    }

    public setTabooAreas(TabooAreas: string): void {
        this.TabooAreas = TabooAreas;
    }


    /**
     * Have you Ever euthanazied a pet?
     */
    public HaveYouEverEuthanized : boolean;

    public isHaveYouEverEuthanized(): boolean {
        return this.HaveYouEverEuthanized;
    }

    public setHaveYouEverEuthanized(HaveYouEverEuthanized: boolean): void {
        this.HaveYouEverEuthanized = HaveYouEverEuthanized;
    }


    /**
     * Reason for putting pet down
     */
    public EuthanizationReason: string;

    public getEuthanizationReason(): string {
        return this.EuthanizationReason;
    }

    public setEuthanizationReason(EuthanizationReason: string): void {
        this.EuthanizationReason = EuthanizationReason;
    }


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