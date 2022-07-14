import {
  NgModule, Component, enableProdMode, ChangeDetectionStrategy,
} from '@angular/core';

import { DxPivotGridModule } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-pivot',
  templateUrl: './app-pivot.component.html',
  styleUrls: ['./app-pivot.component.css']
})
export class AppPivotComponent {

  dataSource: any;
  url: string;

  constructor() {

    this.url = "https://localhost:7127/api/MobilAku";

    this.dataSource = {
      remoteOperations: true,
      store: AspNetData.createStore({
        key: 'OrderID',
        loadUrl: `${this.url}/MobilAkus`,
      }),
      fields: [{
        caption: 'Category',
        dataField: 'ProductCategoryName',
        width: 250,
        expanded: true,
        sortBySummaryField: 'SalesAmount',
        sortBySummaryPath: [],
        sortOrder: 'desc',
        area: 'row',
      }, {
        caption: 'Subcategory',
        dataField: 'ProductSubcategoryName',
        width: 250,
        sortBySummaryField: 'SalesAmount',
        sortBySummaryPath: [],
        sortOrder: 'desc',
        area: 'row',
      }, {
        caption: 'Product',
        dataField: 'ProductName',
        area: 'row',
        sortBySummaryField: 'SalesAmount',
        sortBySummaryPath: [],
        sortOrder: 'desc',
        width: 250,
      }, {
        caption: 'Date',
        dataField: 'DateKey',
        dataType: 'date',
        area: 'column',
      }, {
        caption: 'Amount',
        dataField: 'SalesAmount',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
      }, {
        caption: 'Store',
        dataField: 'StoreName',
      }, {
        caption: 'Quantity',
        dataField: 'SalesQuantity',
        summaryType: 'sum',
      }, {
        caption: 'Unit Price',
        dataField: 'UnitPrice',
        format: 'currency',
        summaryType: 'sum',
      }, {
        dataField: 'Id',
        visible: false,
      }],
    };
  }
}
