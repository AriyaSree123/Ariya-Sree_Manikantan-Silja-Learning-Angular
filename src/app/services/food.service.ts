import { Injectable } from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {catchError, Observable, of, throwError} from "rxjs";
import {FoodList} from "../shared/models/dataMock-food";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'api/foods';
  private foods:FoodProduction[] = FoodList;

  constructor(private http: HttpClient) { }
  getFoods(): Observable<FoodProduction[]>{
    return this.http.get<FoodProduction[]>(this.apiUrl).pipe(catchError(this.handleError));

  }

  getFoodById(foodId:number):Observable<FoodProduction>{
    return this.http.get<FoodProduction>(`${this.apiUrl}/${foodId}`).pipe(catchError(this.handleError));
  }

  addFood(newFood : FoodProduction) : Observable<FoodProduction>{
    newFood.ProductId = this.generateNewID();
    return this.http.post<FoodProduction>(this.apiUrl, newFood).pipe(catchError(this.handleError));
  }

  updateFood(newFood :FoodProduction) : Observable<FoodProduction | undefined>{
    const url = `${this.apiUrl}/${newFood.ProductId}`;
    return this.http.put<FoodProduction>(url, newFood).pipe(catchError(this.handleError));

  }

  deleteFood(foodId: number): Observable<{}>{
    const url = `${this.apiUrl}/${foodId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewID():number{
    return this.foods.length > 0 ? Math.max(...this.foods.map(food => food.ProductId)) + 1 : 1;
  }

  private handleError(error:HttpErrorResponse){
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
