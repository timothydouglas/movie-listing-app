import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './pages/popular/popular.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: PopularComponent,
  },
  {
    path: 'details/:movieId',
    component: DetailsComponent
  },
];

@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
} )
export class MoviesRoutingModule {
}
