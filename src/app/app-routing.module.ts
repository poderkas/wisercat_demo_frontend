import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePetComponent } from './pet/create-pet/create-pet.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { UpdatePetComponent } from './pet/update-pet/pet-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'pet', pathMatch: 'full' },
  { path: 'add', component: CreatePetComponent },
  { path: 'pets', component: PetListComponent },
  { path: 'update/:id', component: UpdatePetComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
