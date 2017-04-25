import {Sport} from "../filter/sport";
import {Round} from "./round";
export class Match {
  $key: string;
  team1: string;
  team2: string;
  team1Score: number;
  team2Score: number;
  startTime: Date;
  isFinished: Boolean;
  creatorId: string;
  sport: Sport;
  rounds: Round[];
}
