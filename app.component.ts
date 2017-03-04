import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <div><h1>{{pageTitle}}</h1>
      <my-data></my-data>
    </div>`,
})
export class AppComponent  { pageTitle : string = `My Example`; }




