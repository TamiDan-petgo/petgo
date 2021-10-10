import { UserBase } from "./UserBase";
/**
 * class of human users
 */
export class User extends UserBase {
    /**
     * Date of Birth of User
     */
    public DateOfBirth : Date;

    /**
     * Create new Instance of User
     * @param name Name of the User.
     * @param id ID of the User if already exists
     */
    constructor(name: string, id? : string) {
        super(name, id);
        this.DateOfBirth = new Date();
    }
}