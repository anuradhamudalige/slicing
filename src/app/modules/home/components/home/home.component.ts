import { Component, OnInit } from '@angular/core';
import { Template } from '../../models/template';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  selectedTemplateId = 1;
  alterClass = '';

  ngOnInit(): void {
    this.templateList.push({
      id: 1,
      headerText: 'LOREM IPSUM DOLOR',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.<br>Quisque volutpat mattis eros.'
    });
    this.templateList.push({
      id: 2, headerText: 'DONEC NEC JUSTO', content: [
        {
          header: 'Lorem ipsum #1',
          content: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
        },
        {
          header: 'Lorem ipsum #2',
          content: 'Aenean dignissim pelle ntesque felis sed egestas, ante et vulputate volutpat.'
        },
        {
          header: 'Lorem ipsum #3',
          content: 'Eros pede semper est, vitae luctus metus libero eu augue.'
        }
      ]
    });
    this.selectedTemplateId = 1;
  }

  onSelect(template: Template): void {
    this.selectedTemplateId = template.id;
    this.alterClass = template.id === 1 ? '' : 'dark slide-b';
  }

  loadNext(): void {
    const template = this.templateList.filter(item => item.id === this.selectedTemplateId + 1);
    if (template) {
      this.onSelect(template[0]);
    }
  }

  getHeaderText(id: number): string {
    return this.templateList.filter(item => item.id === id)[0].headerText;
  }

  getContent(id: number): any {
    return this.templateList.filter(item => item.id === id)[0].content;
  }

}
