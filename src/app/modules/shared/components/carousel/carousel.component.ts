import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('prevNext', [
      state('prev', style({transform: 'translateX(100px) ease-in'})),
      state('next', style({transform: 'translateX(-100px)'})),
      transition('prev <=> next', animate(1000)),
      transition('* <=> *', animate(1000))
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input()
  carouselItemList: CarouselItem[] = [];
  currentTransition = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  prev(): void {
    this.currentTransition = 'prev';
  }

  next(): void {
    this.currentTransition = 'next';
  }

  onAnimationEvent(): void {
    this.currentTransition = '';
  }
}
