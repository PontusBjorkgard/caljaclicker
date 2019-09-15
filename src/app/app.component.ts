import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caljaclicker';
  clicks = 0;

  addClick() {
    this.clicks += 1;
  }

  subtractClicks(cost) {
    this.clicks -= cost ;
  }

}
