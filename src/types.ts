export enum TodoStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
}

export type Todo = {
    id: string,
    description:string,
    status: TodoStatus,
}