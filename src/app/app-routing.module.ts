import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { CoursComponent } from './cours/cours.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"enseignants",component:EnseignantsComponent},
  {path:"cours",component:CoursComponent},
  {path:"etudiant",component:EtudiantComponent},
  {path:"responsable",component:ResponsableComponent},
  {path:"user",component:UserComponent},
  {path:"login",component:LoginComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
