import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from './pet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pets: Pet[];
  public editPet: Pet;
  public deletePet: Pet;

  constructor(private petService: PetService){}

  ngOnInit() {
    this.getPets();
  }

  public getPets(): void {
    this.petService.getPets().subscribe(
      (response: Pet[]) => {
        this.pets = response;
        console.log(this.pets);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPet(addForm: NgForm): void {
    document.getElementById('add-pet-form').click();
    this.petService.addPet(addForm.value).subscribe(
      (response: Pet) => {
        console.log(response);
        this.getPets();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePet(pet: Pet): void {
    this.petService.updatePet(pet).subscribe(
      (response: Pet) => {
        
        console.log(response);
        this.getPets();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePet(petId: number): void {
    this.petService.deletePet(petId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPets();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(pet: Pet, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPetModal');
    }
    if (mode === 'edit') {
      this.editPet = pet;
      button.setAttribute('data-target', '#updatePetModal');
    }
    if (mode === 'delete') {
      this.deletePet = pet;
      button.setAttribute('data-target', '#deletePetModal');
    }
    container.appendChild(button);
    button.click();
  }



}
