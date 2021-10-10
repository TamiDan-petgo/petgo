import { ActorBase } from "./ActorBase";
import { Pet } from './Pet';

/**
 * Base class of all Users
 */
export class UserBase extends ActorBase {
    public Pets: Pet[];

    /**
     * Constructor of UserBase
     * @param name Display Name of the User
     * @param id ID of the User if already exists
     */
    constructor(name: string, id? : string) {
        super(name, id);
        this.Pets = [];
    }
}