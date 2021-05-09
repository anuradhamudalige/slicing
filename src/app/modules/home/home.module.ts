import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {
}
