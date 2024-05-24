export class Task {
    id!: number;
    name!: string;
    completed = false;

    constructor(pTask?: Task) {
        if(pTask) {
            this.id = pTask.id;
            this.name = pTask.name;
            this.completed = pTask.completed;
        }
    }
}