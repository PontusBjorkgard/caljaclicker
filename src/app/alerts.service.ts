import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alertsObservable = new Subject;
  constructor() {}
  alerts = [];

  alert(msg, type) {
    let now = Date.now();

    let alert = {
      'msg': msg,
      'type': type,
      'created': now
    };

    setTimeout( () => {
      this.alertsObservable.next(alert);
    }, 100)
    
  }
}
