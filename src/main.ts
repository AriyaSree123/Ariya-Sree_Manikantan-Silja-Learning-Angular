import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {FoodListComponent} from "./app/food-list/food-list.component";
import {FoodInfoComponent} from "./app/food-info/food-info.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes =[
  {path:'', redirectTo: '/foods', component: FoodListComponent},
  {path:'foods', component: FoodInfoComponent},
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=> console.log('Bootstrap successful'));
