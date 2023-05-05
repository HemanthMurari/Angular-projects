import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutriPlanComponent } from './nutri-plan/nutri-plan.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './card/details/details.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"Diet Plan", component:NutriPlanComponent},
  {path:"Reach Us", component:ReachUsComponent},
  {path:"card",component:CardComponent},
  {path:":id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
