import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBoxComponent } from './card/card-box/card-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltertypePipe } from './pipes/filtertype.pipe';
import { FilterpricePipe } from './pipes/filterprice.pipe';

import { MaterialModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NutriPlanComponent } from './nutri-plan/nutri-plan.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { DetailsComponent } from './card/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBoxComponent,
    FiltertypePipe,
    FilterpricePipe,
    MenuBarComponent,
    NutriPlanComponent,
    ReachUsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
