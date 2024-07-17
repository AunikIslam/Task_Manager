import { UserRoleEnum } from "../enums/user-roles";
import { Organization } from "./organization";

export class User {
    id: string;
    userName: string;
    email: string;
    password: string;
    organizations: Organization[] = [];
}