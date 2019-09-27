import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { autoClickers } from '../auto-clickers';
@Component({
  selector: 'app-auto-clicker-shop',
  templateUrl: './auto-clicker-shop.component.html',
  styleUrls: ['./auto-clicker-shop.component.scss']
})




export class AutoClickerShopComponent implements OnInit, OnChanges {
  @Input() clicks;
  @Output() autoClickE = new EventEmitter();
  @Output() buyClickerE = new EventEmitter();
 

  clickers = autoClickers;

  intervals = [];
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  buyClicker(clicker) {
    if ( this.clicks < clicker.cost ) {
      console.log( 'Har int råd');
      return;
    }
    this.buyClickerE.emit(clicker.cost);
    clicker.inInventory = clicker.inInventory == undefined ? 1 : clicker.inInventory + 1;
    clicker.cost = Math.ceil( 1.25 * clicker.cost )  ;
    this.intervals.push( setInterval( () => {
      this.autoClickE.emit();
      console.log( 'Click: ' + clicker.title);
    }, clicker.effect )
    );

  }



}
