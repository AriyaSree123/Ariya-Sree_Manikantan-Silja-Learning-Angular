import {Component, OnInit} from '@angular/core';
import {FoodList} from "../shared/models/dataMock-food";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food.service";
import {FoodProduction} from "../shared/models/food-production";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  foodForm:FormGroup;
  food:FoodProduction | undefined;


  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private foodService:FoodService,
    private router: Router
  ) {
    this.foodForm=this.fb.group({
      ProductID:['',Validators.required],
      Brand:['',Validators.required],
      ItemName:['',Validators.required],
      ExpiryDate:['',Validators.required],
      Barcode:['',Validators.required],
      path:['',Validators.required]
    })
  }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('ProductID'));
    if(id){
      this.foodService.getFoodById(id).subscribe({
        next:food =>{
          if(food){
            this.foodForm.patchValue(food);
          }
        }
      })
    }
  }

  onSubmit():void{
    if(this.foodForm.valid){
      const food: FoodProduction=this.foodForm.value;
      if(food.ProductId){
        this.foodService.updateFood(food).subscribe(()=>this.router.navigate(['/foods']));
      }else{
        food.ProductId=this.foodService.generateNewID();
        this.foodService.addFood(food).subscribe(()=>this.router.navigate(['/foods']))
      }
    }
  }




}
