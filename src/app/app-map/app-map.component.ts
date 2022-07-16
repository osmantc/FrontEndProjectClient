import { NgModule, Component } from '@angular/core';
import { AkuServiceService } from '../services/aku-service.service';
import { DxMapComponent } from 'devextreme-angular';
import { DxMapModule } from 'devextreme-angular';



@Component({
  selector: 'demo-app',
  providers: [AkuServiceService],
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})

export class AppMapComponent {
  customMarkerUrl: string;

  mapMarkerUrl: string;

  originalMarkers: Marker[];

  markers: Marker[];

  constructor(service: AkuServiceService) {
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.originalMarkers = this.markers = service.getMarkers();
  }

  checkCustomMarker(data) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
    this.markers = this.originalMarkers;
  }

  showTooltips() {
    this.markers = this.markers.map((item) => {
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tooltip.isShown = true;
      return newItem;
    });
  }
}
