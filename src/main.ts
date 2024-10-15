import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {FoodListComponent} from "./app/food-list/food-list.component";
import {FoodInfoComponent} from "./app/food-info/food-info.component";

const routes: Routes =[
  {path:'', redirectTo: '/foods', component: FoodListComponent},
  {path:'foods/:id', component: FoodInfoComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=> console.log('Bootstrap successful'));
