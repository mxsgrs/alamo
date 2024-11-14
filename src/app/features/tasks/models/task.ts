import { TaskStatus } from "./task-status";

export class Task {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public status: TaskStatus,
        public creationDate: Date
    ) {}
}