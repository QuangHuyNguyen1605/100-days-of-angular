import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
