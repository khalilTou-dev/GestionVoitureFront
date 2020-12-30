import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { VoituresComponent } from './voitures/voitures.component';

const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path: "add-voiture", component: AddVoitureComponent},
  {path: "updateVoiture/:matriculeVoit", component: UpdateVoitureComponent},
  { path: "", redirectTo: "voitures", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
