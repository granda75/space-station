import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationsService} from "./locations.service";
import {SpaceStationLocation} from "../models/space-station-location";
import {map, Observable, Subscription} from "rxjs";
import {LocationNoteDialogComponent} from "../location-note-dialog/location-note-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-iis-location',
  templateUrl: './iis-location.component.html',
  styleUrls: ['./iis-location.component.scss']
})
export class IisLocationComponent implements OnInit, OnDestroy {

    public spaceStationLocation: SpaceStationLocation;
    public spaceStationLocation$: Observable<any> = new Observable<any>();
    subscription1$: Subscription = new Subscription();

  constructor(private locationService: LocationsService, public dialog: MatDialog) {
      this.spaceStationLocation = new SpaceStationLocation('');
  }

  ngOnInit() {

    setInterval(() => {
      this.getLocationFromServer();
    }, 2000);

  }

  openDialog() {
     this.dialog.open(LocationNoteDialogComponent, {
      height: '200px',
      width: '400px',
      data: this.spaceStationLocation
    });
  }

  forceCast<T>(input: any): T {

    // ... do runtime checks here

    // @ts-ignore <-- forces TS compiler to compile this as-is
    return input;
  }

  getLocationFromServer() {
    this.subscription1$ = this.locationService.getLocation()
            .pipe(map(value => value))
            .subscribe(res => {
                // this.spaceStationLocation = res as SpaceStationLocation;
                // let json = JSON.stringify(this.spaceStationLocation);
                this.spaceStationLocation = new SpaceStationLocation(res);
         });
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
  }

}
