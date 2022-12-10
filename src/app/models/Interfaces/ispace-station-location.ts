import {I_IssPosition} from "./iss-position";

export interface ISpaceStationLocation {
  iis_position: I_IssPosition;
  timestamp: number;
  message: string;
}
