import {Personnage} from "./personnage";

export class Lien {
    constructor(id: number | null, type: string, source: Personnage, cible: Personnage) {
        this._id = id;
        this._type = type;
        this._source = source;
        this._cible = cible;
    }

    private _id: number | null;

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    private _type: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    private _source: Personnage;

    get source(): Personnage {
        return this._source;
    }

    set source(value: Personnage) {
        this._source = value;
    }

    private _cible: Personnage;

    get cible(): Personnage {
        return this._cible;
    }

    set cible(value: Personnage) {
        this._cible = value;
    }
}
