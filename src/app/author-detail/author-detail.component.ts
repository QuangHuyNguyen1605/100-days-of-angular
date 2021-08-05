import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  constructor() {}
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  ngOnInit() {}
}
