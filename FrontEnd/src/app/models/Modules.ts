import { Formateur } from "./Formateur/Formateur";

export class Modules {
    idModule! : number;
    nomModule: string="";
    horaire!:number;
    formateur!:Formateur;
    nombreDeSeance!:number;
  }