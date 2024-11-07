import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {FoodProduction} from "./shared/models/food-production";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{

  createDb():{foods:FoodProduction[]} {

    const foods: FoodProduction[] = [
      {ProductId: 1, Brand: "Nirapara", ItemName: "Rice", ExpiryDate: "10-03-2027", Barcode: 1234,image: "/Images/rice.webp"},
      {ProductId: 2, Brand: "DoubleHourse", ItemName: "Iddiyappam", ExpiryDate: "01-11-2025", Barcode: 1235,image: "/Images/Idiyappam.JPG"},
      {ProductId: 3, Brand: "Shah", ItemName: "ChilliPowder", ExpiryDate: "03-03-2025", Barcode: 1236,image: "/Images/chilli.jpeg"},
      {ProductId: 4, Brand: "SK", ItemName: "Salt", ExpiryDate: "05-09-2025", Barcode: 1237,image: "/Images/salt.jpeg"}

    ];

    return {foods};

  }

}
