import { Component } from '@angular/core';
import {FoodProduction} from "../models/food-production";
import {FoodInfoComponent} from "../food-info/food-info.component";
import {NgForOf} from "@angular/common";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    FoodInfoComponent,
    NgForOf
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  displayedlists:string[]= ['ProductId','Brand','ItemName','ExpiryDate','Barcode'];

  constructor (private foodService: FoodService){

  }

}
