import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  url: string;
  markerUrl: string;

  constructor(private httpClient: HttpClient) {

    this.url = "https://localhost:7127/api/MobilAku";
    // this.markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";
    this.markerUrl = "/assets/accumulatorsm.png"
  }

  getMarkers(): Observable<Marker[]> {
    return this.httpClient.get<Marker[]>(`${this.url}/Markers`);
  }

  getMarkerUrl(): string {
    return this.markerUrl;
  }

}


export class Tooltip {
  isShown!: boolean;
  text!: string;
}

export class Marker {
  location!: any;
  tooltip!: Tooltip;
}
