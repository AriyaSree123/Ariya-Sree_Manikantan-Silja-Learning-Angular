import {Component, Input, OnInit} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {FoodInfoComponent} from "../food-info/food-info.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FoodService} from "../services/food.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FoodList} from "../shared/models/dataMock-food";

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    FoodInfoComponent,
    NgForOf,
    RouterLink,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit{
  foodList: FoodProduction [] = [];
  @Input() food!: FoodProduction;

  constructor (private foodService: FoodService,
               private route: ActivatedRoute,
               private router: Router){
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next: (data: FoodProduction[]) => this.foodList = data
    })
  }

  onEdit(ProductId: number){
    this.router.navigate(['/modify-list-item']);
  }

  selectedFood?:FoodProduction;
  selectFood(food:FoodProduction):void{
    this.selectedFood = food;
  }

  onDelete(ProductId: number){
    if(this.selectedFood){
      this.foodService.deleteFood(this.selectedFood.ProductId);
      this.foodList = this.foodList.filter(food=> food.ProductId !== this.selectedFood?.ProductId)
      this.router.navigate(['/foods']);
    }
  }

  protected readonly FoodList = FoodList;

}
