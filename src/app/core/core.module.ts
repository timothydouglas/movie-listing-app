import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentInterceptor } from './interceptors/content.interceptor';

@NgModule( {
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContentInterceptor, multi: true },
  ]
} )

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only'
      );
    }
  }
}
