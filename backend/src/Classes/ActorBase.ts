import {v4 as uuid} from 'uuid';
import { Questionaire } from './Questionaire';
/**
 * Base Class of all relevant Actors in petgo.
 */
export class ActorBase {
    /**
     * ID of the Actor.
     */
    private ID: string;

    /**
     * Name of the Actor.
     */
    public Name: string;

    /**
     * About the Actor
     */
    public About?: string;

    /**
     * Image of the Actor.
     */
    public Image?: string;

    /**
     * Questionaire
     */
    public Questionaire? : Questionaire;

    /**
     * Create new instance of ActorBase
     * @param id ID of the Actor
     * @param name name of the Actor
     * @param about About the Actor, can be null
     * @param image Image of the Actor, can be null
     * @param questionaire Questionaire of Actor, can be null
     */
    constructor(name: string, id?: string, about?: string, image?: string, questionaire?: Questionaire) {
        this.ID = id ?? uuid();
        this.Name = name;
        this.About = about;
        this.Image = image;
        this.Questionaire = questionaire;
    }

    public getID() : string {
        return this.ID;
    }
}