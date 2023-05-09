import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Pet } from '../model/pet.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PetService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/pets/';

  

  getPets() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPetById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createPet(pet: Pet): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, pet);
  }

  updatePet(id: number, pet: Pet): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + pet.id, pet);
  }

  deletePet(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}