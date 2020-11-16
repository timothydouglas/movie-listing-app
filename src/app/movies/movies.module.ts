import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MovieService } from './services/movie.service';
import { PopularComponent } from './pages/popular/popular.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListingComponent } from './components/listing/listing.component';
import { MatButtonModule } from '@angular/material/button';
import { reducers, featureKey, effects } from './store/';
import { SharedModule } from '../shared/shared.module';
import { SortByComponent } from './components/sort-by/sort-by.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature( effects ),
    StoreModule.forFeature( featureKey, reducers ),
    MoviesRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ScrollingModule,
    SharedModule
  ],
  declarations: [
    PopularComponent,
    DetailsComponent,
    ListingComponent,
    SortByComponent
  ],
  providers: [
    MovieService,
  ]
})
export class MoviesModule { }
