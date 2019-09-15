import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {
  @Input() clicks;
  @Output() clickE = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
