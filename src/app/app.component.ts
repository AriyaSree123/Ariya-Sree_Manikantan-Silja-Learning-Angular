import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FoodProduction} from "./models/food-production";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodProduction';
  FoodList : FoodProduction[] = [
    {ProductId: 1, Brand: "Nirapara", ItemName: "Rice", ExpiryDate: "10-03-2027", Barcode: 1234},
    {ProductId: 2, Brand: "DoubleHourse", ItemName: "Iddiyappam", ExpiryDate: "01-11-2025", Barcode: 1235},
    {ProductId: 3, Brand: "Shah", ItemName: "ChilliPowder", ExpiryDate: "03-03-2025", Barcode: 1236},
    {ProductId: 4, Brand: "SK", ItemName: "Salt", ExpiryDate: "05-09-2025", Barcode: 1237},
    {ProductId: 5, Brand: "SR", ItemName: "MasalaPowder", ExpiryDate: "09-09-2025", Barcode: 1238},
    {ProductId: 6, Brand: "SM", ItemName: "Turmeric", ExpiryDate: "08-09-2025", Barcode: 1239}
  ]


}
