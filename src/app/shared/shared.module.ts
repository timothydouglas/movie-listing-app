import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContentInterceptor } from './interceptors/content.interceptor';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    RemoveUnderscorePipe,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    RemoveUnderscorePipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContentInterceptor, multi: true },
  ]
})
export class SharedModule { }
