import { makeBindingParser } from '@angular/compiler';
import { NgModule, Component, OnInit } from '@angular/core';
import { DxiMarkerComponent } from 'devextreme-angular/ui/nested';
import { LocationServiceService, Marker, Tooltip } from '../services/location-service.service';


@Component({
  selector: 'app-map',
  providers: [LocationServiceService],
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})

export class AppMapComponent implements OnInit {

  customMarkerUrl!: string;
  mapMarkerUrl!: string;

  originalMarkers!: Marker[];
  markers!: Marker[];

  constructor(service: LocationServiceService) {

    this.markers = [];
    this.originalMarkers = [];
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();

    service.getMarkers().subscribe(x => {
      this.markers = this.originalMarkers = x;
      // x.forEach(element => {

      //   let location: string = element.location;
      //   let tooltip: Tooltip = new Tooltip();
      //   tooltip.isShown = element.tooltip.isShown;
      //   tooltip.text = element.tooltip.text;

      //   let marker: Marker = new Marker();
      //   marker.location = location;
      //   marker.tooltip = tooltip;

      //   this.markers.push(marker);
      //   this.originalMarkers.push(marker);
      // });

    });

  }

  ngOnInit(): void {

  }

  checkCustomMarker(data: any) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : '';
    this.markers = this.originalMarkers;
  }

  showTooltips() {
    this.markers = this.markers.map((item) => {
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tooltip.isShown = !item.tooltip.isShown;
      return newItem;
    });
  }
}
