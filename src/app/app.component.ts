import {
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewContainerRef,
  ViewChildren
} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef<
    HTMLInputElement
  >;
  name = 'Angular ' + VERSION.major;
  currentProgress = 70;
  isChecked = true;
  isDanger = false;
  isWarning = false;
  classes = 'box red-border yellow-background';
  questions = {
    question1: true,
    question2: false
  };
  counter = 1;
  navs = ['Active', 'Link 1', 'Link 2'];
  showTab4 = true;
  ngOnInit() {
    //this.nameInput.nativeElement.focus();
    this.toggleComps.changes.subscribe(console.log);
  }

  ngAfterViewInit() {}
}
