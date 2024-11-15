import { TaskStatus } from "./task-status";

export class Task {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public status: TaskStatus,
        public creationDate: Date
    ) {}
}