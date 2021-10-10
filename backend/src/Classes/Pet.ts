import { ActorBase } from "./ActorBase";

/**
 * Class of Pets
 */
export class Pet extends ActorBase {
    constructor(name: string, id? : string) {
        super(name, id);
    }
}