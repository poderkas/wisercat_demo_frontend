import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/service/pet.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Observable<ApiResponse>;
  constructor(private petService: PetService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
      
    }

  ngOnInit() {
    this.pets = this.petService.getPets();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }

  deletePet(id: number) {
    this.petService.deletePet(id)
      .subscribe(
        data => {
          console.log(data);
          this.pets = this.petService.getPets();
        },
        error => console.log(error));
  }

  updatePet(id: number){
    this.router.navigate(['update', id]);
  }


}
