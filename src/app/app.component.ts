import { Component } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Client';

  mobilAkuData: any;
  dataSource: any;
  url: string;


  constructor() {

    this.url = "https://localhost:7127/api/MobilAku";

    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: `${this.url}/MobilAkus`,
      insertUrl: `${this.url}/InsertMobilAku`,
      updateUrl: `${this.url}/UpdateMobilAku`,
      deleteUrl: `${this.url}/DeleteMobilAku`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
        // ajaxOptions.contentType="application/json";
      },
    });

  }


}
