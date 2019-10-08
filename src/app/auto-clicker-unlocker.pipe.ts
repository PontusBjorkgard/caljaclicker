import { Pipe, PipeTransform } from '@angular/core';
import { AlertsService } from './alerts.service';

@Pipe({
  name: 'autoClickerUnlocker'
})
export class AutoClickerUnlockerPipe implements PipeTransform {

  constructor(private alertsservice: AlertsService) {}
  transform(clicker: any, clicks: any ): any {
    if ( clicker.unlocked ) {
      return clicker.title;
    }
    if ( clicker.cost <= clicks ) {
      this.alertsservice.alert( clicker.title + ' finns nu att köpas', 'info');
      //console.log( 'Ny sak')
      clicker.unlocked = true;
      return clicker.title;
    }
    return '????';
  }

}
