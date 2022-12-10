import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SpaceStationLocation} from "../models/space-station-location";


@Component({
  selector: 'app-location-note-dialog',
  templateUrl: './location-note-dialog.component.html',
  styleUrls: ['./location-note-dialog.component.scss']
})
export class LocationNoteDialogComponent {

    locationNote : string = '';
    locationData: SpaceStationLocation;

    constructor(public dialogRef: MatDialogRef<LocationNoteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SpaceStationLocation) {
      this.locationData = data;
    }

  closeDialog() {
    this.dialogRef.close('');
  }

  saveNote() {
    const note = this.locationNote;
    const latitude = this.locationData?.iss_position?.latitude;
    const longitude = this.locationData?.iss_position?.longitude;
    this.closeDialog();
  }
}
