import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Movie } from '../../interfaces';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  @Output() loadMore: EventEmitter<null> = new EventEmitter();
  @Input() loadMoreBuffer = 1;
  @Input() isLoading: boolean;
  @Input() movies: Movie[];

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