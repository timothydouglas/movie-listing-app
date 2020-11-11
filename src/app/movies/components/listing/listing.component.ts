import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Movies } from '../../interfaces';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  @Output() loadMore: EventEmitter<null> = new EventEmitter();
  @Input() loadMoreBuffer: number;
  @Input() isLoading: boolean;
  @Input() movies: Movies[];

  resizeHandler$ = fromEvent(window, 'resize').pipe(
    distinctUntilChanged(),
    debounceTime(60),
    tap(() => this.viewport.checkViewportSize())
  );

  scrolledIndexChange( index: number ) {
    if ( this.isLoading || !this.movies || this.movies.length === 0 ) {
      return;
    }

    const { end } = this.viewport.getRenderedRange();
    const total = this.viewport.getDataLength();

    if ( end >= total - this.loadMoreBuffer ) {
      this.loadMore.emit();
    }
  }
}
