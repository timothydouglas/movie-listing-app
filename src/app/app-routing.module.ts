import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: async () => (await import('./movies/movies.module')).MoviesModule,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
