export class Task {
    constructor(
        public id: number,
        public name: string,
        public status: string,
        public dueDate?: Date
    ) {}
}