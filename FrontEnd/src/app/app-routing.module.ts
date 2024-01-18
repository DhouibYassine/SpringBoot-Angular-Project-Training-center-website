import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//-------------------------------------DashBoardImportation----------------------------------------------

import { DashHomeComponent } from './components/DashBoard/dash-home/dash-home.component';

import { DashForgotPasswordComponent } from './components/DashBoard/dash-forgot-password/dash-forgot-password.component';
import { DashLoginComponent } from './components/DashBoard/dash-login/dash-login.component';

import { DashErrorComponent } from './components/DashBoard/dash-error/dash-error.component';
import { DashFormateurComponent } from './components/DashBoard/dash-formateur/dash-formateur.component';

//-------------------------------------WebSiteImportation------------------------------------------------

import { SiteHomeComponent } from './components/WebSite/site-home/site-home.component';
import { SiteAboutComponent } from './components/WebSite/site-about/site-about.component';
import { SiteContactComponent } from './components/WebSite/site-contact/site-contact.component';
import { SiteCoursesComponent } from './components/WebSite/site-courses/site-courses.component';
import { SiteEventsComponent } from './components/WebSite/site-events/site-events.component';
import { SiteLoginComponent } from './components/WebSite/site-login/site-login.component';
import { SiteSignUpEtudiantComponent } from './components/WebSite/site-sign-up-etudiant/site-sign-up-etudiant.component';
import { SiteTrainersComponent } from './components/WebSite/site-trainers/site-trainers.component';
import { DashEtudiantComponent } from './components/DashBoard/dash-etudiant/dash-etudiant.component';

import { DashModuleComponent } from './components/DashBoard/dash-module/dash-module.component';

import { DashFormationComponent } from './components/DashBoard/dash-formation/dash-formation.component';
import { EspaceEtudiantComponent } from './components/WebSite/espace-etudiant/espace-etudiant.component';
import { BecomeATrainerComponent } from './components/WebSite/become-atrainer/become-atrainer.component';
import { EspaceFormateurComponent } from './components/WebSite/espace-formateur/espace-formateur.component';
import { ListFormationComponent } from './components/WebSite/Tools/list-formation/list-formation.component';
import { PresenceAfficheComponent } from './components/WebSite/Tools/presence-affiche/presence-affiche.component';
import { ParametresComponent } from './components/WebSite/parametres/parametres.component';
import { MoreComponent } from './components/WebSite/more/more.component';
import { AuthGuard } from './services/AuthGuard/auth-guard.service';
import { CourcesComponent } from './components/WebSite/Tools/etudiant/cources/cources.component';
import { EmploisComponent } from './components/WebSite/Tools/etudiant/emplois/emplois.component';

const routes: Routes = [

  //--------------WebSite-------------

  {
    path: 'WebSiteHome',
    pathMatch: 'full',
    component: SiteHomeComponent
  },
  {
    path: 'About',
    pathMatch: 'full',
    component: SiteAboutComponent
  },
  {
    path: 'Contact',
    pathMatch: 'full',
    component: SiteContactComponent
  },
  {
    path: 'Cources',
    pathMatch: 'full',
    component: SiteCoursesComponent
  },
  {
    path: 'Events',
    pathMatch: 'full',
    component: SiteEventsComponent
  },
  {
    path: 'becomeatrainer',
    pathMatch: 'full',
    component: BecomeATrainerComponent
  },
  {
    path: 'Login',
    pathMatch: 'full',
    component: SiteLoginComponent,
    
  },
  {
    path: 'Parametres',
    pathMatch: 'full',
    component: ParametresComponent
  },
  {
    path: 'SignUpEtudiant',
    pathMatch: 'full',
    component: SiteSignUpEtudiantComponent
  },
  {
    path: 'EspaceFormateur',
    pathMatch: 'full',
    component: EspaceFormateurComponent
  },
  {
    path: 'Trainers',
    pathMatch: 'full',
    component: SiteTrainersComponent
  },
  {
    path: 'EspaceEtudiant',
    pathMatch: 'full',
    component: EspaceEtudiantComponent
  },
  {
    path: 'EspaceEtudiant',
    pathMatch: 'full',
    component: EspaceEtudiantComponent
  },
  {
    path: 'ListFormation',
    pathMatch: 'full',
    component: ListFormationComponent
  },
  {
    path: 'Presence',
    pathMatch: 'full',
    component: PresenceAfficheComponent
  },
  {
    path: 'More',
    pathMatch: 'full',
    component: MoreComponent
  },
  {
    path: 'CourcesEtudiant',
    pathMatch: 'full',
    component: CourcesComponent
  },
  {
    path: 'EmploisEtudiant',
    pathMatch: 'full',
    component: EmploisComponent
  },

  //--------------DashBoard-------------
  
  {
    path: 'DashHome',
    pathMatch: 'full',
    component: DashHomeComponent,
    // canActivate: [AuthGuard]
  },
 
  {
    path: 'ForgotPassword',
    pathMatch: 'full',
    component: DashForgotPasswordComponent
  },
  {
    path: 'DashLogin',
    pathMatch: 'full',
    component: DashLoginComponent
  },

  {
    path: 'DashEtudiant',
    pathMatch: 'full',
    component: DashEtudiantComponent
  },

  {
    path: 'DashFormateur',
    pathMatch: 'full',
    component: DashFormateurComponent
  },

  {
    path: '404',
    pathMatch: 'full',
    component: DashErrorComponent
  },

  {
    path: 'DashModule',
    pathMatch: 'full',
    component: DashModuleComponent
  },

  {
    path: 'DashFormation',
    pathMatch: 'full',
    component: DashFormationComponent
  },
  //--------------Default-------------

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: "WebSiteHome"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
