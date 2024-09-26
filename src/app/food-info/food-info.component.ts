import {Component, Input} from '@angular/core';
import {FoodProduction} from "../models/food-production";

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.css'
})
export class FoodInfoComponent {
  // takes inputs from user
  @Input() food?: FoodProduction;

}
