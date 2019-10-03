import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { autoClickers } from './auto-clickers';
@Injectable({
  providedIn: 'root'
})
export class ClickersService {
  intervals = [];
  clicks: number;
  clickers;

  constructor( @Inject(LOCAL_STORAGE) private storage: StorageService ) { }

  getClickers() {
    this.clickers = this.storage.get('clickers') == undefined ? autoClickers : this.storage.get('clickers');
    return this.clickers;
  }

  getClicks() {
    this.clicks = this.storage.get('clicks') == undefined ? 0 : this.storage.get('clicks');
    return this.clicks;
  }

  


  updateLocalStorage( clicks, clickers ) {
    this.storage.set( 'clicks', clicks );
    this.storage.set( 'clickers', clickers );
    console.log('hej');
  }


}
