import {Component, Input, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
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
export class FoodListComponent implements OnInit{
  foodList: FoodProduction [] = [];
  @Input() food!: FoodProduction;

  constructor (private foodService: FoodService){
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next: (data: FoodProduction[]) => this.foodList = data
    })
  }

}
