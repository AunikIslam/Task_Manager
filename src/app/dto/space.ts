import { Organization } from "./organization";
import { Task } from "./task";
import { User } from "./user";

export class Space {
    id: string;
    name: string;
    users: User[] = [];
    organizations: Organization[] = [];
    tasks: Task[] = []
}