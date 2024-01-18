import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/Session/session.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent {
  constructor(private sessionService:SessionService,private router: Router){}
  LogOut(){
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_DATA");
    this.sessionService.clear("_CURRENT_USER");
    this.router.navigate(['WebSiteHome']);
    setTimeout(() => {
      // Reload the page
      window.location.reload();
    }, 50);

  }
}
