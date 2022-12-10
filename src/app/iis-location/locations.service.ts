import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SpaceStationLocation} from "../models/space-station-location";


@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  getLocation(): Observable<SpaceStationLocation> {
    return this.http.get<SpaceStationLocation>(this.url + "api/Space")
      .pipe(map((value: any) => value));

  }
}
