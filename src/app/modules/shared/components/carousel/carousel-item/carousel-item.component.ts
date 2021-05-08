import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../../models/carousel-item';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input()
  carouselItem = new CarouselItem();

  constructor() {
  }

  ngOnInit(): void {
  }

}
