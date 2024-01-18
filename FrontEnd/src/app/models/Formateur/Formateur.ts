import { Formation } from "../Formation";
import { Modules } from "../Modules";
import { User } from "../User";

export class Formateur extends User {
 
    cv:string='';
    etat:string='';
    listModules!:Modules[];
    
  }