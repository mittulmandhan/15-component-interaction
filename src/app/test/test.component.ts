
// child of app component
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // if using same name
  @Input() public parentData;

  // or if u want to use parentData property as some other name then use following declaration
  // @input('parentData') public differentName;

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Whats up!');
  }

}
