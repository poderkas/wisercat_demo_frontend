import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePetComponent } from './pet/create-pet/create-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from './service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { UpdatePetComponent} from './pet/update-pet/update-pet.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    CreatePetComponent,
    PetListComponent,
    UpdatePetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
