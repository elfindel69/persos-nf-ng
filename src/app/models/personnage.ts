import {Sexe} from "./sexe";
import {ICDate} from "./icdate";
import {Lieu} from "./lieu";
import {Lien} from "./lien";
import {SigneDistinctif} from "./signe-distinctif";
import {Parcours} from "./parcours";
import {Hobby} from "./hobby";


export class Personnage {
    private _liens: Array<Lien> | undefined;
    private _signesdistinctifs: Array<SigneDistinctif> | undefined;
    private _parcours: Array<Parcours> | undefined;
    private _hobbies: Array<Hobby> | undefined;

    constructor(id: number | null, nom: string, prenom: string, ddNAD: Date, sexe: Sexe, taille: number,
                poids: number, couleurCheveux: string, couleurYeux: string, ddNIC: ICDate, lieuNaissance: Lieu) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._ddNAD = ddNAD;
        this._sexe = sexe;
        this._taille = taille;
        this._poids = poids;
        this._couleurCheveux = couleurCheveux;
        this._couleurYeux = couleurYeux;
        this._ddNIC = ddNIC;
        this._lieuNaissance = lieuNaissance;
    }

    private _id: number | null;

    get id(): number {
        return <number>this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _nom: string;

    get nom(): string {
        return <string>this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    private _prenom: string;

    get prenom(): string {
        return <string>this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    private _ddNAD: Date;

    get ddNAD(): Date {
        return <Date>this._ddNAD;
    }

    set ddNAD(value: Date) {
        this._ddNAD = value;
    }

    private _metier: string | undefined;

    get metier(): string {
        return <string>this._metier;
    }

    set metier(value: string) {
        this._metier = value;
    }

    private _ethnie: string | undefined;

    get ethnie(): string {
        return <string>this._ethnie;
    }

    set ethnie(value: string) {
        this._ethnie = value;
    }

    private _ordre: string | undefined;

    get ordre(): string {
        return <string>this._ordre;
    }

    set ordre(value: string) {
        this._ordre = value;
    }

    private _titre: string | undefined;

    get titre(): string {
        return <string>this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    private _rang: string | undefined;

    get rang(): string | undefined {
        return this._rang;
    }

    set rang(value: string | undefined) {
        this._rang = value;
    }

    private _sexe: Sexe;

    get sexe(): Sexe {
        return this._sexe;
    }

    set sexe(value: Sexe) {
        this._sexe = value;
    }

    private _taille: number;

    get taille(): number {
        return this._taille;
    }

    set taille(value: number) {
        this._taille = value;
    }

    private _poids: number;

    get poids(): number {
        return this._poids;
    }

    set poids(value: number) {
        this._poids = value;
    }

    private _couleurPeau: string | undefined;

    get couleurPeau(): string | undefined {
        return this._couleurPeau;
    }

    set couleurPeau(value: string | undefined) {
        this._couleurPeau = value;
    }

    private _corpulence: string | undefined;

    get corpulence(): string | undefined {
        return this._corpulence;
    }

    set corpulence(value: string | undefined) {
        this._corpulence = value;
    }

    private _couleurCheveux: string;

    get couleurCheveux(): string {
        return this._couleurCheveux;
    }

    set couleurCheveux(value: string) {
        this._couleurCheveux = value;
    }

    private _couleurYeux: string;

    get couleurYeux(): string {
        return this._couleurYeux;
    }

    set couleurYeux(value: string) {
        this._couleurYeux = value;
    }

    private _lore: string | undefined;

    get lore(): string | undefined {
        return this._lore;
    }

    set lore(value: string | undefined) {
        this._lore = value;
    }

    private _ddNIC: ICDate;

    get ddNIC(): ICDate {
        return this._ddNIC;
    }

    set ddNIC(value: ICDate) {
        this._ddNIC = value;
    }

    private _lieuNaissance: Lieu;

    get lieuNaissance(): Lieu {
        return this._lieuNaissance;
    }

    set lieuNaissance(value: Lieu) {
        this._lieuNaissance = value;
    }

    private _lieuHabitation: Lieu | undefined;

    get lieuHabitation(): Lieu | undefined {
        return this._lieuHabitation;
    }

    set lieuHabitation(value: Lieu | undefined) {
        this._lieuHabitation = value;
    }


    get liens(): Array<Lien> | undefined {
        return this._liens;
    }

    set liens(value: Array<Lien> | undefined) {
        this._liens = value;
    }

    get signesdistinctifs(): Array<SigneDistinctif> | undefined {
        return this._signesdistinctifs;
    }

    set signesdistinctifs(value: Array<SigneDistinctif> | undefined) {
        this._signesdistinctifs = value;
    }

    get parcours(): Array<Parcours> | undefined {
        return this._parcours;
    }

    set parcours(value: Array<Parcours> | undefined) {
        this._parcours = value;
    }

    get hobbies(): Array<Hobby> | undefined {
        return this._hobbies;
    }

    set hobbies(value: Array<Hobby> | undefined) {
        this._hobbies = value;
    }
}
