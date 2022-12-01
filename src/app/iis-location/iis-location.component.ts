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

  public spaceStationLocation: SpaceStationLocation = new SpaceStationLocation();
  public spaceStationLocation$: Observable<any> = new Observable<any>();
  subscription1$: Subscription = new Subscription();

  constructor(private locationService: LocationsService, public dialog: MatDialog) {

  }

  ngOnInit() {

    setInterval(() => {
      this.getLocationFromServer();
    }, 2000);

  }


  openDialog() {
    let dialogRef = this.dialog.open(LocationNoteDialogComponent, {
      height: '200px',
      width: '400px',
      data: this.spaceStationLocation
    });
  }

  getLocationFromServer() {
    this.subscription1$ = this.locationService.getLocation()
            .pipe(map(value => value as SpaceStationLocation))
            .subscribe(res => {
                this.spaceStationLocation = res;
          });
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
  }

}
