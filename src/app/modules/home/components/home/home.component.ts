import { Component, OnInit } from '@angular/core';
import { Template } from '../../models/template';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HomeService } from '../../services/home.service';
import { Meta } from '@angular/platform-browser';

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

  constructor(private homeService: HomeService, private metaService: Meta) {
  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.homeService.getData().subscribe(response => {
      this.templateList = response;
      this.selectedTemplateId = response[0].id;
      this.alterClass = 'slide-a';
      this.initializeMeta(response[0]);
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

  private initializeMeta(template: Template): void {
    this.metaService.addTags([
      {name: 'keywords', content: template.title},
      {name: 'description', content: template.content},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
