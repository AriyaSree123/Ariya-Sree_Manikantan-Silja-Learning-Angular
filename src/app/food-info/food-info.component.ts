import {Component, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {CurrencyPipe, LowerCasePipe, NgIf, UpperCasePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../services/food.service";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [
    NgIf,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    HoverHighlightDirective
  ],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.css'
})
export class FoodInfoComponent  implements OnInit{
  food:FoodProduction | undefined;
  foodList:FoodProduction[]=[];
  currentIndex:number = 0;
  constructor(
    private route:ActivatedRoute,
    private foodService:FoodService
  ) {
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next:(foods:FoodProduction[])=>{
        this.foodList = foods;

        this.route.paramMap.subscribe(params =>{
          const id = Number(params.get('id'));
          if(id){
            this.currentIndex = this.foodList.findIndex(food => food.ProductId === id);
            this.food = this.foodList[this.currentIndex];
          }
        });
      }
    });
  }

  // takes inputs from user
  //@Input() food?: FoodProduction;

}
