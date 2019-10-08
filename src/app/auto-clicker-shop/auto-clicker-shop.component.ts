import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AlertsService } from '../alerts.service';
@Component({
  selector: 'app-auto-clicker-shop',
  templateUrl: './auto-clicker-shop.component.html',
  styleUrls: ['./auto-clicker-shop.component.scss']
})

export class AutoClickerShopComponent implements OnInit{
  @Input() clicks;
  @Input() clickers;
  @Output() buyClickerE = new EventEmitter();
 
  constructor( private alertsservice: AlertsService ) {}

  ngOnInit() {}

  buyClicker(clicker) {
    if ( this.clicks < clicker.cost ) {
      this.alertsservice.alert('Har int råd', 'error');
      return;
    }
    this.buyClickerE.emit(clicker);
  }



}
