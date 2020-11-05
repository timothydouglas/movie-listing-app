import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MeterComponent } from './components/meter/meter.component';
import { MeterService } from './services/meter/meter.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    MeterComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MeterComponent,
  ],
  providers: [
    MeterService
  ]
})
export class SharedModule { }
