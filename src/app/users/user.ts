import {Role} from "../role/role";
export class User{
  $key: string;
  username: string;
  email: string;
  phone: number;
  role: Role;
}
