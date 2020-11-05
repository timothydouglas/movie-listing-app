import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { MeterService } from '../../services/meter/meter.service';

@Component( {
  selector: 'app-meter',
  template: `<mat-progress-bar class="progress" mode="indeterminate" [color]="color" *ngIf="meter"></mat-progress-bar>`,
} )
export class MeterComponent implements OnInit, OnDestroy {

  @Input() color: ThemePalette = 'primary';
  meter: boolean;

  private subscription: Subscription = new Subscription();

  constructor( private meterService: MeterService ) {
  }

  ngOnInit() {
    this.subscription = this.meterService.meter.subscribe( ( status: boolean ) => {
      this.meter = true;
    } );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
