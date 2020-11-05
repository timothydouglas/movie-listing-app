import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-home',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
} )
export class ListingComponent implements OnInit {

  title = 'The title';

  constructor() {
  }

  ngOnInit() {
  }

}
