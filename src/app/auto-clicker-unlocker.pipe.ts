import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoClickerUnlocker'
})
export class AutoClickerUnlockerPipe implements PipeTransform {

  transform(clicker: any, clicks: any ): any {
    if ( clicker.unlocked ) {
      return clicker.title;
    }
    if ( clicker.cost <= clicks ) {
      console.log( 'New Unlock! ');
      clicker.unlocked = true;
      return clicker.title;
    }
    return '????';
  }

}
