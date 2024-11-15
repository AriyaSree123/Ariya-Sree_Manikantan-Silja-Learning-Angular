import { Pipe, PipeTransform } from '@angular/core';
import {FoodProduction} from "../shared/models/food-production";

@Pipe({
  name: 'daysToExpiry',
  standalone: true
})
export class DaysToExpiryPipe implements PipeTransform {

  transform(expiryDate:string): string {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const timeLeft = expiry.getTime() - today.getTime();
    const remainingDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

    if(remainingDays < 0){
      return `Item expired ${Math.abs(remainingDays)} days ago`;
    }else if(remainingDays === 0){
      return 'Item will expire today';
    }else{
      return `${remainingDays} days left to expire`;
    }
  }

}
