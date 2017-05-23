import {Role} from "../role/role";
import {Profile} from "./profile";

export class User{
  $key: string;
  profile: Profile;
  role: Role;
  isDisabled: boolean;
}
