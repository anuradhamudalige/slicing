import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @ViewChild('wrapper') wrapperEl: ElementRef | undefined;
  @Input()
  carouselItemList: CarouselItem[] = [];
  currentTransition = '';
  amount = 0;
  maxOffset = 0;
  maxOffsetRight = 0;
  maxOffsetLeft = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initializeOffset();
  }

  prev(event: any, wrapperEl: any): void {
    this.calculateMaxOffset(wrapperEl.offsetWidth);
    let movingOffset = 250;
    if (this.maxOffsetLeft < 250) {
      movingOffset = this.maxOffsetLeft;
    }
    this.amount += movingOffset;
    this.maxOffsetRight += movingOffset;
    this.maxOffsetLeft -= movingOffset;
  }

  next(event: any, wrapperEl: any): void {
    this.calculateMaxOffset(wrapperEl.offsetWidth);
    let movingOffset = 250;
    if (this.maxOffsetRight < 250) {
      movingOffset = this.maxOffsetRight;
    }
    this.amount -= movingOffset;
    this.maxOffsetLeft += movingOffset;
    this.maxOffsetRight -= movingOffset;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.initializeOffset();
  }

  initializeOffset(): void {
    setTimeout(() => {
      this.calculateMaxOffset(this.wrapperEl?.nativeElement.offsetWidth);
      this.maxOffsetRight = this.maxOffset < 0 ? 0 : this.maxOffset;
      this.maxOffsetLeft = 0;
      this.amount = 0;
    });
  }

  calculateMaxOffset(windowWidth: number): void {
    const itemCount = this.carouselItemList.length;
    this.maxOffset = Math.abs(windowWidth - (itemCount * 250 + (10 * (itemCount - 1))));
  }
}
