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
import { interval } from 'rxjs';

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

  date = new Date();
  user = {
    name: 'Chau Tran',
    age: 29
  };
  interval$ = interval(1000);
  // Order, Company
  addr = {
    address1: '123 Some St',
    address2: 'STE100',
    city: 'Acme',
    state: 'State',
    zip: '12345',
    country: 'US'
  };

  users = [
    {
      name: 'Tiep Phan',
      age: 30
    },
    {
      name: 'Trung Vo',
      age: 28
    },
    {
      name: 'Chau Tran',
      age: 29
    },
    {
      name: 'Tuan Anh',
      age: 16
    }
  ];

  ngOnInit() {
    //this.nameInput.nativeElement.focus();
    this.toggleComps.changes.subscribe(console.log);
  }

  ngAfterViewInit() {}

  formatAddress(addr) {
    console.log('function run', addr);
    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ', ' +
      addr.state +
      ' ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }

  addUser() {
    // Immutable adding
    //this.users = [...this.users, { name: 'new user', age: 30 }];
    this.users.push({ name: 'new user', age: 30 });
  }
}
