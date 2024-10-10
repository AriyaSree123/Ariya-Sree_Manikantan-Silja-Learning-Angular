import { Injectable } from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {Observable, of} from "rxjs";
import {FoodList} from "../shared/models/dataMock-food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods:FoodProduction[] = FoodList;

  constructor() { }
  getFoods(): Observable<FoodProduction[]>{
    return of(FoodList);

  }

  addFood(newFood : FoodProduction) : Observable<FoodProduction[]>{
    this.foods.push(newFood)
    return of(this.foods);
  }

  updateFood(updatedfood :FoodProduction) : Observable<FoodProduction[]>{
    const index = this.foods.findIndex(Food => Food.ProductId === updatedfood.ProductId);
    if(index !== -1){
      this.foods[index] = updatedfood;
    }
    return of(this.foods);

  }

  deleteFood(foodId: number): Observable<FoodProduction[]>{
    this.foods = this.foods.filter(Food => Food.ProductId !== foodId);
    return of(this.foods);
  }

  getFoodById(foodId:number):Observable<FoodProduction | undefined>{
    const varities = this.foods.find(Food => Food.ProductId === foodId);
    return of(varities);
  }

}
