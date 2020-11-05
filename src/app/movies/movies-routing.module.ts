import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './pages/listing/listing.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
];

@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
} )
export class MoviesRoutingModule {
}
