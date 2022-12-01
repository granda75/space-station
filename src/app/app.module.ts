import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IisLocationComponent } from './iis-location/iis-location.component';
import {HttpClientModule} from "@angular/common/http";
import { LocationNoteDialogComponent } from './location-note-dialog/location-note-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    IisLocationComponent,
    LocationNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
