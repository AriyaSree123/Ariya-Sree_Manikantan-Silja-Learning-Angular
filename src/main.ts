import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {FoodListComponent} from "./app/food-list/food-list.component";
import {FoodInfoComponent} from "./app/food-info/food-info.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes =[
  {path:'', redirectTo: '/food', pathMatch: "full"},
  {path:'food', component: FoodListComponent},
  {path:'food/:id',
    loadComponent:() =>
      import('./app/food-info/food-info.component').then(m => m.FoodInfoComponent) },
  {path:'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  {path:'**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=> console.log('Bootstrap successful'));
