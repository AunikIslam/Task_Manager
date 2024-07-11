import { UserRoleEnum } from "../enums/user-roles";

export class User {
    id: string;
    userName: string;
    email: string;
    password: string;
    userRole: UserRoleEnum;
}