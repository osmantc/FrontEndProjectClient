import { Component, OnInit, ViewChild } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent, DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';

import { AppDetailGridComponent } from '../app-detail-grid/app-detail-grid.component';


@Component({
  selector: 'app-datagrid',
  templateUrl: './app-datagrid.component.html',
  styleUrls: ['./app-datagrid.component.css']
})
export class AppDatagridComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false })

  dataGrid!: DxDataGridComponent;

  mobilAkuData: any;
  dataSource: CustomStore;
  url: string;

  readonly allowedPageSizes = [20, 50, 100, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  get isCompactMode() {
    return this.displayMode === 'compact';
  }


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

  ngOnInit(): void {

  }


}
