import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentInterceptor } from './interceptors/content.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContentInterceptor, multi: true },
  ]
})
export class SharedModule { }
