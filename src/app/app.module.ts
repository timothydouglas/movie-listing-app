import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';
import { environment } from '../environments/environment';
import { AppReducer } from './core/store/app.reducer';
import * as fromApp from './core/store/app.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducer, {}),
    EffectsModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.AppReducer),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
