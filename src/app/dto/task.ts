import { v4 as uuidv4 } from 'uuid';
export class Task {
    id!: string;
    name!: string;
    completed = false;

    constructor(pTask?: Task) {
        if(pTask) {
            this.id = uuidv4();
            this.name = pTask.name;
            this.completed = pTask.completed;
        }
    }
}