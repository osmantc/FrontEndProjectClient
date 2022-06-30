import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Client';

  liste:Array<any> = [...Array(100).keys()];

  constructor() {


  }

  public Deneme() {
    alert("merhaba");
  }

}
