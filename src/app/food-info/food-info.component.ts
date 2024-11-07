import {Component, Input, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.css'
})
export class FoodInfoComponent  implements OnInit{
  food:FoodProduction | undefined;
  foodList:FoodProduction[]=[];
  currentIndex:number = 0;
  error:String|null=null;
  constructor(
    private route:ActivatedRoute,
    private foodService:FoodService
  ) {
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next:(foods:FoodProduction[])=>{
        this.foodList = foods;
        this.error = null;

        this.route.paramMap.subscribe(params =>{
          const id = Number(params.get('id'));
          if(id){
            this.currentIndex = this.foodList.findIndex(food => food.ProductId === id);
            this.food = this.foodList[this.currentIndex];
          }
        });
      },
      error:(err)=>{
        this.error = 'Error fetching food';
        console.error('Error fetching food:', err);
      }
    });
  }

  // takes inputs from user
  //@Input() food?: FoodProduction;

}
