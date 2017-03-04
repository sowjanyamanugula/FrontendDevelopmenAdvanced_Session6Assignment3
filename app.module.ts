import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { dataComponent } from './data/data.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  dataComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
