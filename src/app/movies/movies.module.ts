import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ListingComponent } from './pages/listing/listing.component';
import { DetailsComponent } from './pages/details/details.component';
import { MovieEffects } from './store/movie.effects';
import * as fromMovie from './store/movie.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([MovieEffects]),
    StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
    MoviesRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ListingComponent,
    DetailsComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
