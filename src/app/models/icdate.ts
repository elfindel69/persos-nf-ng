export class ICDate {
    constructor(annee: number, mois: number, jour: number, id: number | null) {
        this._annee = annee;
        this._mois = mois;
        this._jour = jour;
        this._id = id;
    }

    private _id: number | null;

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    private _annee: number;

    get annee(): number {
        return this._annee;
    }

    set annee(value: number) {
        this._annee = value;
    }

    private _mois: number;

    get mois(): number {
        return this._mois;
    }

    set mois(value: number) {
        this._mois = value;
    }

    private _jour: number;

    get jour(): number {
        return this._jour;
    }

    set jour(value: number) {
        this._jour = value;
    }
}
