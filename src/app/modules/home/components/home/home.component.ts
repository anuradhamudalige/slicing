import { Component, OnInit } from '@angular/core';
import { Template } from '../../models/template';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  templateList: Template[] = [];
  selectedTemplateId: number | undefined;
  alterClass = '';

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.homeService.getData().subscribe(response => {
      this.templateList = response;
      this.selectedTemplateId = response[0].id;
      this.alterClass = 'slide-a';
    });
  }

  onSelect(template: Template): void {
    this.selectedTemplateId = template.id;
    this.alterClass = template.id === 1 ? 'slide-a' : 'dark slide-b';
  }

  loadNext(): void {
    const template = this.templateList.filter(item => item.id === (this.selectedTemplateId || 0) + 1);
    if (template) {
      this.onSelect(template[0]);
    }
  }

  getHeaderText(id: number): string {
    return this.templateList.filter(item => item.id === id)[0].title;
  }

  getContent(id: number): any {
    return this.templateList.filter(item => item.id === id)[0].content;
  }

  getBackground(id: number): any {
    return this.templateList.filter(item => item.id === id)[0].background;
  }
}
