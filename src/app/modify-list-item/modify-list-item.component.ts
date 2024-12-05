import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodList} from "../shared/models/dataMock-food";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food.service";
import {FoodProduction} from "../shared/models/food-production";
import {NgIf} from "@angular/common";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    MatPaginator,
    MatTooltip
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  foodList: FoodProduction[] = FoodList;
  foodForm:FormGroup;
  food:FoodProduction | undefined;

  @ViewChild(MatPaginator)paginator:MatPaginator |null=null;


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

  navigateToStudentList(): void {
    this.router.navigate(['/students']);
  }




}
