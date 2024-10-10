import {Component, Input} from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.css'
})
export class FoodInfoComponent {
  // takes inputs from user
  @Input() food?: FoodProduction;

}
