import { Space } from "./space";

export class User {
    id: string;
    userName: string;
    email: string;
    password: string;
    spaces: Space[] = [];
}