import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/Session/session.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private sessionService:SessionService,private router: Router){}

  LogOut(){
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_DATA");
    this.sessionService.clear("_CURRENT_USER");
    this.router.navigate(['WebSiteHome']);
    window.location.reload();

  }
}
