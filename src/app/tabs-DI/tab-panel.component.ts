import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TabContentDirective } from '../tabs-DI/tab-content.directive';
import { TabGroupComponent } from '../tabs-DI/tab-group.component';

@Component({
  selector: 'tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TabPanelComponent {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef })
  explicitBody: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}
  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }
  ngOnInit() {
    console.log();
    this.tabGroup.addTab(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
