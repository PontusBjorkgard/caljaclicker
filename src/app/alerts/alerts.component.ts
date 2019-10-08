import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alerts = [];
  alertDuration = 2000;

  constructor( private alertsservice: AlertsService ) {
    this.alertsservice.alertsObservable.subscribe( alert => {
      let activeAlerts = this.alerts.push(alert);
      let thisAlert = this.alerts[activeAlerts-1]
      setTimeout( () => {
        for( let i = 0; i < this.alerts.length; i++ ) {
          if ( this.alerts[i].created == thisAlert.created) {
            this.alerts.splice(i, 1);
          } 
        }
    }, this.alertDuration)
    })
   }
  
  ngOnInit() {}

}
