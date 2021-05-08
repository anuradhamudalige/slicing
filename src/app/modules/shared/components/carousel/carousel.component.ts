import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  carouselItemList: CarouselItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
