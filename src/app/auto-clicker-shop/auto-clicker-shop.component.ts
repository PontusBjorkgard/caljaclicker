import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-clicker-shop',
  templateUrl: './auto-clicker-shop.component.html',
  styleUrls: ['./auto-clicker-shop.component.scss']
})

export class AutoClickerShopComponent implements OnInit{
  @Input() clicks;
  @Input() clickers;
  @Output() buyClickerE = new EventEmitter();
 
  constructor() {}

  ngOnInit() {}

  buyClicker(clicker) {
    if ( this.clicks < clicker.cost ) {
      console.log( 'Har int råd');
      return;
    }
    this.buyClickerE.emit(clicker);
  }



}
