import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/service/pet.service';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {

  id: number;
  pet: Pet;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private petService: PetService) { }

  ngOnInit() {
    this.pet = new Pet();

    this.id = this.route.snapshot.params['id'];
    this.petService.getPetById(this.id)
      .subscribe(data => {
        console.log(data)
        this.pet = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.petService.updatePet(this.id, this.pet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pet = new Pet();
    this.router.navigate(['/pets']);
    }

  
  list(){
    this.router.navigate(['pets']);
  }
}