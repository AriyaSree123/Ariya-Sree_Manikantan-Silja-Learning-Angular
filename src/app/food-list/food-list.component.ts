import {Component, Input, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {FoodInfoComponent} from "../food-info/food-info.component";
import {CurrencyPipe, LowerCasePipe, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {FoodService} from "../services/food.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {DaysToExpiryPipe} from "../pipes/days-to-expiry.pipe";



@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    FoodInfoComponent,
    NgForOf,
    RouterLink,
    NgOptimizedImage,
    NgIf,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DaysToExpiryPipe
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit{
  foodList: FoodProduction [] = [];
  error: string| null = null;
  //@Input() food!: FoodProduction;

  constructor (private foodService: FoodService,
               private router: Router){
  }



  ngOnInit(){
    this.foodService.getFoods().subscribe({
      next: (data: FoodProduction[]) => {
        this.foodList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching food';
        console.error("Error fetching foods", err);
      },
      complete: () => console.log("Food data fetch completed")

    });
  }

  onEdit(ProductId: number){
    this.router.navigate(['/foods', ProductId]);
  }

 /* selectedFood?:FoodProduction;
  selectFood(food:FoodProduction):void{
    this.selectedFood = food;
  }
*/
  onDelete(ProductId: number){
    this.foodService.deleteFood(ProductId).subscribe({
      next:(updateFoodList:any)=>{

        this.foodList=updateFoodList;
        this.error=null;
      },
      error: err => {
        this.error='Error Deleting food';
        console.error("Error deleting food",err);
      }
    })
  }

  //protected FoodList = FoodList;

}
