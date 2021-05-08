import {Component, OnInit} from '@angular/core';
import {Template} from './template';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000)),
    ]),
  ]
})
export class AppComponent implements OnInit {
  templateList: Template[] = [];
  selectedTemplateId: number | undefined;

  ngOnInit(): void {
    this.templateList.push({id: 1});
    this.templateList.push({id: 2});
    this.selectedTemplateId = 1;
  }

  onSelect(template: Template): void {
    this.selectedTemplateId = template.id;
  }
}
