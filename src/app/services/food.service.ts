import { Injectable } from '@angular/core';
import {FoodProduction} from "../models/food-production";
import {Observable, of} from "rxjs";
import {FoodList} from "../shared/models/dataMock-food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoods(): Observable<FoodProduction[]>{
    return of(FoodList);

  }
}
