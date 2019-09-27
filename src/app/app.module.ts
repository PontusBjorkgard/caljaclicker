import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { AutoClickerShopComponent } from './auto-clicker-shop/auto-clicker-shop.component';
import { AutoClickerUnlockerPipe } from './auto-clicker-unlocker.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    AutoClickerShopComponent,
    AutoClickerUnlockerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
