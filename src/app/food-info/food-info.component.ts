import {Component, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {CurrencyPipe, LowerCasePipe, NgIf, UpperCasePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food.service";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {MatCard, MatCardContent, MatCardHeader,MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [
    NgIf,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    HoverHighlightDirective,
    HighlightOnFocusDirective,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatButton,
    MatCardModule
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
    private foodService:FoodService,
    private router:Router
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

  goBack(): void {
    this.router.navigate(['/students']);
  }

  goForward(): void {
    if (this.currentIndex < this.foodList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/students', this.foodList[this.currentIndex].ProductId]);
    }
  }


  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/students', this.foodList[this.currentIndex].ProductId]);
    }
  }

  // takes inputs from user
  //@Input() food?: FoodProduction;

}
