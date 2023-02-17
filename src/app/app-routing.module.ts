import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformspagesComponent } from './pages/artformspages/artformspages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { SiglepagesComponent } from './pages/siglepages/siglepages.component';
import { SigninpagesComponent } from './pages/signinpages/signinpages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';

const routes: Routes = [
  {
    path:'',component:HomepagesComponent
  },
  {
    path:'contact',component:ContactpagesComponent
  },
  {
    path:'Artform',component:ArtformspagesComponent
  },

  {
    path:'signup',component:SignuppagesComponent
  },
  {
    path:'signin',component:SigninpagesComponent
  },
  {
    path:'siglepages',component:SiglepagesComponent
  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
