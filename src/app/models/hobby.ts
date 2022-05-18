import {Personnage} from "./personnage";


export class Hobby {
    constructor(id: number | null, nom: string) {
        this._id = id;
        this._nom = nom;
    }

    private _id: number | null;

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    private _nom: string;

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    private _personnages: Array<Personnage> | undefined;

    get personnages(): Array<Personnage> | undefined {
        return this._personnages;
    }

    set personnages(value: Array<Personnage> | undefined) {
        this._personnages = value;
    }
}
