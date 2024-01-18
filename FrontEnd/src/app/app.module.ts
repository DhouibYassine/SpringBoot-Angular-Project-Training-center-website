import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';
//alert
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
//
//-------------------------------------WebSiteImportation------------------------------------------------

import { SiteHomeComponent } from './components/WebSite/site-home/site-home.component';
import { DashHomeComponent } from './components/DashBoard/dash-home/dash-home.component';
import { SiteHeaderComponent } from './components/WebSite/site-header/site-header.component';
import { SiteFooterComponent } from './components/WebSite/site-footer/site-footer.component';
import { SiteAboutComponent } from './components/WebSite/site-about/site-about.component';
import { SiteCoursesComponent } from './components/WebSite/site-courses/site-courses.component';
import { SiteTrainersComponent } from './components/WebSite/site-trainers/site-trainers.component';
import { SiteEventsComponent } from './components/WebSite/site-events/site-events.component';
import { SiteContactComponent } from './components/WebSite/site-contact/site-contact.component';
import { SiteLoginComponent } from './components/WebSite/site-login/site-login.component';
import { SiteSignUpEtudiantComponent } from './components/WebSite/site-sign-up-etudiant/site-sign-up-etudiant.component';

//-------------------------------------DashBoardImportation----------------------------------------------


import { DashLoginComponent } from './components/DashBoard/dash-login/dash-login.component';

import { DashForgotPasswordComponent } from './components/DashBoard/dash-forgot-password/dash-forgot-password.component';
import { SidebarComponent } from './components/DashBoard/pieces/sidebar/sidebar.component';
import { TopBarComponent } from './components/DashBoard/pieces/top-bar/top-bar.component';
import { DashFooterComponent } from './components/DashBoard/pieces/dash-footer/dash-footer.component';
import { LogoutModalComponent } from './components/DashBoard/pieces/logout-modal/logout-modal.component';
import { DashErrorComponent } from './components/DashBoard/dash-error/dash-error.component';
import { DashFormateurComponent } from './components/DashBoard/dash-formateur/dash-formateur.component';
import { DashEtudiantComponent } from './components/DashBoard/dash-etudiant/dash-etudiant.component';

import { DashModuleComponent } from './components/DashBoard/dash-module/dash-module.component';

import { DashFormationComponent } from './components/DashBoard/dash-formation/dash-formation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashGeneralService } from './services/DashBoard/DashGeneralService/dash-general.service';
import { MyService, initializeApp } from './app-initializer';
import { SubscribeDialogComponent } from './components/WebSite/subscribe-dialog/subscribe-dialog.component';
import { EspaceEtudiantComponent } from './components/WebSite/espace-etudiant/espace-etudiant.component';
import { BecomeATrainerComponent } from './components/WebSite/become-atrainer/become-atrainer.component';
import { NgChartsModule } from 'ng2-charts';
import { ConfirmDialogDeleteComponent } from './components/DashBoard/confirm-dialog-delete/confirm-dialog-delete.component';
import { ConfirmDialogUpdateComponent } from './components/DashBoard/confirm-dialog-update/confirm-dialog-update.component';
import { AffecterFormateurToFormationComponent } from './components/DashBoard/affecter-formateur-to-formation/affecter-formateur-to-formation.component';
import { EspaceFormateurComponent } from './components/WebSite/espace-formateur/espace-formateur.component';
import { SidebarFormateurComponent } from './components/WebSite/Tools/sidebar-formateur/sidebar-formateur.component';
import { ListFormationComponent } from './components/WebSite/Tools/list-formation/list-formation.component';
import { PresenceAfficheComponent } from './components/WebSite/Tools/presence-affiche/presence-affiche.component';
import { ParametresComponent } from './components/WebSite/parametres/parametres.component';
import { MoreComponent } from './components/WebSite/more/more.component';
import { AuthGuard } from './services/AuthGuard/auth-guard.service';
import { SidebarEtudiantComponent } from './components/WebSite/Tools/sidebar-etudiant/sidebar-etudiant.component';
import { CourcesComponent } from './components/WebSite/Tools/etudiant/cources/cources.component';
import { EmploisComponent } from './components/WebSite/Tools/etudiant/emplois/emplois.component';

@NgModule({
  declarations: [
    AppComponent,

//--------------WebSite-------------

    SiteHomeComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteAboutComponent,
    SiteCoursesComponent,
    SiteTrainersComponent,
    SiteEventsComponent,
    SiteContactComponent,
    SiteLoginComponent,
    SiteSignUpEtudiantComponent,

//--------------DashBoard-------------

    DashHomeComponent,
    DashForgotPasswordComponent,

    DashLoginComponent,

    SidebarComponent,
    DashFooterComponent,
    TopBarComponent,
    LogoutModalComponent,
    DashErrorComponent,
    DashFormateurComponent,
    DashEtudiantComponent,

    DashModuleComponent,

    DashFormationComponent,
    SubscribeDialogComponent,
    EspaceEtudiantComponent,
    BecomeATrainerComponent,
    ConfirmDialogDeleteComponent,
    ConfirmDialogUpdateComponent,
    AffecterFormateurToFormationComponent,
    EspaceFormateurComponent,
    SidebarFormateurComponent,
    ListFormationComponent,
    PresenceAfficheComponent,
    ParametresComponent,
    MoreComponent,
    SidebarEtudiantComponent,
    CourcesComponent,
    EmploisComponent,
  ],
  
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
//--------------------
    FormsModule,
// for the form
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
//--------------------
HttpClientModule,
MatTableModule,
MatFormFieldModule,
BrowserAnimationsModule,
//------------------
MatSnackBarModule,
MatSlideToggleModule,
MatButtonModule,
MatIconModule,
MatInputModule,
MatListModule,
MatSidenavModule,
MatToolbarModule,
MatSelectModule,
MatDialogModule,
NgChartsModule


],
  providers: [DashGeneralService,MyService,[AuthGuard],
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MyService],
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
