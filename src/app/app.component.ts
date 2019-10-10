import { Component } from '@angular/core';
import { ClickersService } from './clickers.service';
import { AlertsService } from './alerts.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caljaclicker';
  clicks: number;
  clickEffect:number = 1;
  clickers: any;
  interval: any;
  clicksPerSecond: number = 0;

  carouselOptions = {
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    autowidth: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 2,
        nav: true,
        loop: false
      }
    }
  }

  constructor( private clickersService: ClickersService, private alertsService: AlertsService ) {
    this.clicks = this.clickersService.getClicks();
    this.clickers = this.clickersService.getClickers();
    window.addEventListener( 'click', () => {
      this.clickersService.updateLocalStorage( this.clicks, this.clickers );
    });
  }

  addClick() {
    this.clicks += this.clickEffect;
  }

  subtractClicks( cost ) {
    this.clicks -= cost;
  }

  updateInterval( clicker ) {
    this.clicksPerSecond += clicker.clicksPerSec;
    clearInterval( this.interval );
    this.interval = setInterval( () => {
      this.addClick();
    }, 1000 / ( this.clicksPerSecond ) );
  }

  buyClicker(clicker) {

    // Subtracts clicks
    this.subtractClicks(clicker.cost);

    // Increases number of owned clicker
    clicker.inInventory = clicker.inInventory == undefined ? 1 : clicker.inInventory + 1;

    // Increases clicker cost
    clicker.cost = Math.ceil( 1.25 * clicker.cost ) ;

    // Adds clicker interval
    this.updateInterval( clicker );
  }


}
