import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { autoClickers } from '../auto-clickers';
@Component({
  selector: 'app-auto-clicker-shop',
  templateUrl: './auto-clicker-shop.component.html',
  styleUrls: ['./auto-clicker-shop.component.scss']
})
export class AutoClickerShopComponent implements OnInit {
  @Input() clicks;
  @Output() autoClickE = new EventEmitter();
  @Output() buyClickerE = new EventEmitter();

  clickers = autoClickers;

  intervals = [];
  constructor() { }

  ngOnInit() {


  }

  buyClicker(clicker) {
    this.buyClickerE.emit(clicker.cost);
    this.intervals.push( setInterval( () => {
      this.autoClickE.emit();
      console.log( 'Click: ' + clicker.title);
    }, clicker.effect )
    );

  }

}
