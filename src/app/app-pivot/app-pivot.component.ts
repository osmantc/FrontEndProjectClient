import {
  NgModule, Component, enableProdMode, ChangeDetectionStrategy, ViewChild,
} from '@angular/core';

import { DxPivotGridModule, DxPivotGridComponent, DxChartComponent } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-pivot',
  templateUrl: './app-pivot.component.html',
  styleUrls: ['./app-pivot.component.css']
})
export class AppPivotComponent {

  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid!: DxPivotGridComponent;

  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;


  dataSource: any;
  url: string;

  constructor() {

    this.url = "https://localhost:7127/api/MobilAku";

    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.dataSource = {
      remoteOperations: true,
      store: AspNetData.createStore({
        key: 'id',
        loadUrl: `${this.url}/MobilAkus`,
      }),
      fields: [{
        caption: 'Regions',
        dataField: 'regionsName',
        width: 250,
        expanded: true,
        sortBySummaryField: 'Total',
        sortBySummaryPath: [],
        sortOrder: 'desc',
        area: 'row',
      }, {
        caption: 'Cities',
        dataField: 'citiesName',
        width: 250,
        sortBySummaryField: 'Total',
        sortBySummaryPath: [],
        sortOrder: 'desc',
        area: 'row',
      }, {
        caption: 'Date',
        dataField: 'current_date',
        dataType: 'date',
        area: 'column',
      }, {
        caption: 'Count',
        summaryType: 'count',
        area: 'data',
      }, {
        dataField: 'Id',
        visible: false,
      }],
    };
  }

  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });

    // setTimeout(() => {
    //   const dataSource = this.pivotGrid.instance.getDataSource();
    //   dataSource.expandHeaderItem('row', ['North America']);
    //   dataSource.expandHeaderItem('column', [2013]);
    // }, 0);
  }

  customizeTooltip(args: any) {
    return {
      html: `${args.seriesName} | Total<div class='currency'>${args.valueText}</div>`,
    };
  }
}
