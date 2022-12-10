import {IssPosition} from "./iss-position";

export class SpaceStationLocation {
  public iss_position: IssPosition;
  timestamp: number;
  message: string;

  forceCast<T>(input: any): T {

    // ... do runtime checks here

    // @ts-ignore <-- forces TS compiler to compile this as-is
    return input;
  }


  constructor(jsonObj: any) {
      this.timestamp = 0;
      this.message = '';
      this.iss_position = new IssPosition();
      if ( jsonObj != undefined) {
        Object.assign(this, <SpaceStationLocation>(jsonObj));
        Object.assign(this.iss_position, <IssPosition>(jsonObj["iss_position"]));
      }
  }


}
