import { Component } from '@angular/core';
import {FoodProduction} from "../models/food-production";
import {FoodInfoComponent} from "../food-info/food-info.component";
import {NgForOf} from "@angular/common";

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
  FoodList : FoodProduction[] = [
    {ProductId: 1, Brand: "Nirapara", ItemName: "Rice", ExpiryDate: "10-03-2027", Barcode: 1234},
    {ProductId: 2, Brand: "DoubleHourse", ItemName: "Iddiyappam", ExpiryDate: "01-11-2025", Barcode: 1235},
    {ProductId: 3, Brand: "Shah", ItemName: "ChilliPowder", ExpiryDate: "03-03-2025", Barcode: 1236},
    {ProductId: 4, Brand: "SK", ItemName: "Salt", ExpiryDate: "05-09-2025", Barcode: 1237}

  ];

}
