import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { componentDestroyed, OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { Movies } from '../../interfaces';
import { ListRange } from '@angular/cdk/collections';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent extends OnDestroyMixin {

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  @Output() loadMore: EventEmitter<null> = new EventEmitter();
  @Input() loadMoreBuffer: number;
  @Input() isLoading: boolean;
  @Input() movies: Movies[];

  resizeHandler$ = fromEvent(window, 'resize').pipe(
    distinctUntilChanged(),
    debounceTime(60),
    tap(() => this.viewport.checkViewportSize()),
    takeUntil(componentDestroyed(this))
  );

  scrolledIndexChange( index: number ): void {
    if ( this.isLoading || !this.movies || this.movies.length === 0 ) {
      return;
    }

    const { end }: ListRange = this.viewport.getRenderedRange();
    const total: number = this.viewport.getDataLength();

    if ( end >= total - this.loadMoreBuffer ) {
      this.loadMore.emit();
    }
  }


  identify(index, movie): number {
    return movie.id;
  }
}
