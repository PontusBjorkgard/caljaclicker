import { Component } from '@angular/core';
import { ClickersService } from './clickers.service';
/* import { autoClickers } from './auto-clickers'; */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caljaclicker';
  clicks: number;
  clickers: any;
  intervals: any;

  constructor( private clickersService: ClickersService ) {
    this.clicks = this.clickersService.getClicks();
    this.clickers = this.clickersService.getClickers();
    this.setupIntervals();
    window.addEventListener( 'click', () => {
      this.clickersService.updateLocalStorage( this.clicks, this.clickers );
    });
  }

  setupIntervals() {
      this.intervals = [];
      this.clickers.forEach( clicker => {
        if ( clicker.inInventory ) {
          for ( let i = 0; i < clicker.inInventory; i++ ) {
            this.addInterval( clicker );
          }
        } 
      });
  }

  addClick() {
    this.clicks += 1;
  }

  subtractClicks( cost ) {
    this.clicks -= cost;
  }

  addInterval( clicker ) {
    console.log( this.intervals );
    this.intervals.push( setInterval( () => {
      this.addClick();
      console.log( 'Click: ' + clicker.title);
    }, clicker.effect )
    );
  }


  buyClicker(clicker) {

    // Subtracts clicks
    this.subtractClicks(clicker.cost);

    // Increases number of owned clicker
    clicker.inInventory = clicker.inInventory == undefined ? 1 : clicker.inInventory + 1;

    // Increases clicker cost
    clicker.cost = Math.ceil( 1.25 * clicker.cost ) ;

    // Adds clicker interval
    this.addInterval( clicker );
  }


}
