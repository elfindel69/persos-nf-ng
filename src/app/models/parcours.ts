import {Personnage} from "./personnage";

export class Parcours {
    constructor(id: number | null, nom: string, anneeAD: number, anneeIC: number) {
        this._id = id;
        this._nom = nom;
        this._anneeAD = anneeAD;
        this._anneeIC = anneeIC;
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

    private _anneeAD: number;

    get anneeAD(): number {
        return this._anneeAD;
    }

    set anneeAD(value: number) {
        this._anneeAD = value;
    }

    private _anneeIC: number;

    get anneeIC(): number {
        return this._anneeIC;
    }

    set anneeIC(value: number) {
        this._anneeIC = value;
    }

    private _personnages: Array<Personnage> | undefined;

    get personnages(): Array<Personnage> | undefined {
        return this._personnages;
    }

    set personnages(value: Array<Personnage> | undefined) {
        this._personnages = value;
    }
}
