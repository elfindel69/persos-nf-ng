export class Lieu {
    constructor(id: number | null, ville: string, etat: string, systeme: string, pays: string) {
        this._id = id;
        this._ville = ville;
        this._etat = etat;
        this._systeme = systeme;
        this._pays = pays;
    }

    private _id: number | null;

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    private _ville: string;

    get ville(): string {
        return this._ville;
    }

    set ville(value: string) {
        this._ville = value;
    }

    private _etat: string;

    get etat(): string {
        return this._etat;
    }

    set etat(value: string) {
        this._etat = value;
    }

    private _systeme: string;

    get systeme(): string {
        return this._systeme;
    }

    set systeme(value: string) {
        this._systeme = value;
    }

    private _pays: string;

    get pays(): string {
        return this._pays;
    }

    set pays(value: string) {
        this._pays = value;
    }
}
