import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    MessageService
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent
  ]
})
export class SharedModule {
}
