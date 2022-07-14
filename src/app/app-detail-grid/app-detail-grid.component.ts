import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { AkuServiceService } from '../services/aku-service.service';





@Component({
  selector: 'app-detail-grid',
  templateUrl: './app-detail-grid.component.html',
  styleUrls: ['./app-detail-grid.component.css'],
  providers: [AkuServiceService],
})

export class AppDetailGridComponent implements AfterViewInit {

  @Input() key!: number;

  dataSource!: DataSource;
  akuServiceData: any;


  constructor(private service: AkuServiceService) {
    console.log('key key key key :' + this.key)
  }

  ngAfterViewInit() {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: [this.service.getAkus(this.key).subscribe(x => x)],
        key: 'id',
      }),
      filter: ['id', '=', this.key],
    });
  }

  completedValue(rowData: any) {
    return rowData.Status == 'Completed';
  }

}
