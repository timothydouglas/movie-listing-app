import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ListingComponent } from './pages/listing/listing.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    ListingComponent,
    DetailsComponent
  ]
})
export class MoviesModule { }
