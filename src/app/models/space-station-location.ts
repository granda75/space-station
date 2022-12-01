import {IssPosition} from "./iss-position";

export class SpaceStationLocation {
  public iis_position: IssPosition;
  timestamp: number;
  message: string;

  constructor() {
    this.iis_position = new IssPosition();
    this.timestamp = 0;
    this.message = '';
  }

  // constructor(obj: any) {
  //   const position = obj?.iis_position as IssPosition;
  //   this.iis_position = position;
  //   this.timestamp = 0;
  //   this.message = '';
  // }
}
