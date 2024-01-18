import { Etudiant } from "./Etudiant/Etudiant";
import { Formateur } from "./Formateur/Formateur";
import { Modules } from "./Modules";

export class Formation {
    idFormation!: number;
    nomFormation:string='';
    prix!: number;
    dateDebutFormation!:Date;
    dateFinFormation!:Date;
    listeEtudiants!: Etudiant[];        
    horaire!:number;
    photo:string='';
    etat:string='';
    listeModules!: Modules[];
    nbEtudiant!:number;
  }
    