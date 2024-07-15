import { PriotiresEnum } from "../enums/priorites";
import { Client } from "./client";
import { Organization } from "./organization";
import { User } from "./user";

export class Task {
    id: string;
    name: string;
    description: string;
    organization: Organization;
    client: Client;
    assignedTo: User[] = [];
    status: string;
    comment: string;
    priority: PriotiresEnum;
}