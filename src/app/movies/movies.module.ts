import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { MovieService } from './services/movie.service';
import { PopularComponent } from './pages/popular/popular.component';
import { DetailsComponent } from './pages/details/details.component';
import { MoviesGuard } from './guards/movies.guard';
import { ListingComponent } from './components/listing/listing.component';
import { MatButtonModule } from '@angular/material/button';
import { reducers, featureKey, effects } from './store/';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature( effects ),
    StoreModule.forFeature( featureKey, reducers ),
    MoviesRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ScrollingModule
  ],
  declarations: [
    PopularComponent,
    DetailsComponent,
    ListingComponent
  ],
  providers: [
    MovieService,
    MoviesGuard
  ]
})
export class MoviesModule { }
