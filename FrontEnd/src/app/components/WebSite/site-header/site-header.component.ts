import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService } from 'src/app/services/Session/session.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';
import { CookieService } from 'ngx-cookie-service';
import { ADMINService } from 'src/app/services/WebSite/admin/admin.service';
import { SFormateurService } from 'src/app/services/WebSite/Formateur/sformateur.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  currentRoute!: string;
  _CURRENT_ID!:number;
  _CURRENT_DATA!:any;
  _CURRENT_USER!:String;


  constructor(private formateurService:SFormateurService  ,private etudiantService:SEtudiantService,private router: Router,private sessionService:SessionService,private cookieService: CookieService,private adminService:ADMINService) 
  {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
    
   
  }

  ngOnInit() {
    this._CURRENT_USER = this.sessionService.get("_CURRENT_USER");
    this._CURRENT_ID = this.sessionService.get("_CURRENT_ID");
    
    console.log("--------------------------Header Test----------------------------------");
    console.log("_CURRENT_USER: ", this._CURRENT_USER);
    console.log("THE _CURRENT_ID: ", this._CURRENT_ID);
    console.log("--------------------------------------------------------------------------");
    
    if (this._CURRENT_USER === "Admin") {
      this.adminService.getDataEtudiant(this._CURRENT_ID).subscribe(AdminDetail => {
        this.sessionService.set("_CURRENT_DATA", AdminDetail);
      });
    } else if (this._CURRENT_USER === "Etudiant") {
      this.etudiantService.getDataEtudiant(this._CURRENT_ID).subscribe(EtudiantDetail => {
        this.sessionService.set("_CURRENT_DATA", EtudiantDetail);
      });
    } else if (this._CURRENT_USER === "Formateur") {
      this.formateurService.getDataFormateurById(this._CURRENT_ID).subscribe(FormateurDetail => {
        console.log('------------------FormateurDetail------------------');
        console.log(FormateurDetail);
        console.log('------------------FormateurDetail------------------');
        this.sessionService.set("_CURRENT_DATA", FormateurDetail);
      });
    }
  
    this._CURRENT_DATA = this.sessionService.get('_CURRENT_DATA');
    console.log('----------------Test ngOnInit of header--------------------');
    console.log("the _CURRENT_DATA:", this._CURRENT_DATA);
    console.log('-----------------------------------------------------------');
  }
  


  isActive(path: string) {
    return this.currentRoute.startsWith(path);
  }

  mobileNavActive = false;

  toggleMobileNav() {
    this.mobileNavActive = !this.mobileNavActive;
  }

  closeMobileNav() {
    this.mobileNavActive = false;
  }

  LogOut(){
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_DATA");
    this.sessionService.clear("_CURRENT_USER");
    this.router.navigate(['/Login']);
    window.location.reload();
  }
}
