import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FoodProduction} from "./shared/models/food-production";
import {FoodListComponent} from "./food-list/food-list.component";
import {FoodList} from "./shared/models/dataMock-food";
import {FoodInfoComponent} from "./food-info/food-info.component";
import {FoodService} from "./services/food.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, FoodInfoComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FoodProduction';

  newFoodList : FoodProduction = {ProductId: 0, Brand: "SG", ItemName: "sugar", ExpiryDate: "11-03-2027", Barcode: 1234};

  constructor(private foodservice: FoodService){
  }

  ngOnInit(): void {
    this.foodservice.getFoodById(3).subscribe((food) => {

    });
  }

  protected readonly FoodList = FoodList;
}
