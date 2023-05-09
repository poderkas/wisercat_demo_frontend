
import { PetService } from 'src/app/service/pet.service';
import { Pet } from 'src/app/model/pet.model';

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from '@angular/router';


@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet: Pet = new Pet();
  submitted = false;

  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.petService.createPet(this.pet)
    .subscribe(data => console.log(data), error => console.log(error));
    this.pet = new Pet();
    this.router.navigate(['/pets']);
  }

 
}

 

  


  
    
  
  


