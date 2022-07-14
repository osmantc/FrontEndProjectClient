import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AkuServiceService {

  url: string;

  constructor(private httpClient: HttpClient) {

    this.url = "https://localhost:7127/api/MobilAku";

  }

  getAkus(id: number): Observable<Aku> {
    return this.httpClient.get<Aku>(`${this.url}/Get/${id}`);
  }
}

class Aku {

  id!: number;
  tenant_id !: string;
  report_file_process_id !: number

  location !: string
  asset_num !: string
  n_of_ac !: number
  n_of_ne !: number
  battery_age !: string
  n_of_partial_charge !: number
  n_of_generator !: number
  n_of_air_con !: number
  max_ac_duration!: string
  x_afad !: number
  totalpower_loc !: string
  ideal_working_hour !: string
  back_sites !: string
  technology !: string
  remaining_battery_lifetime !: string
  remaining_battery_lifetime_cast_int!: number
  recommendation !: string
  additional_info !: string
  current_date !: Date

  RegionsId!: number
  RegionsName !: string
  CitiesId!: number
  CitiesName !: string
}
