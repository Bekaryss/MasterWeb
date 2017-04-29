import { User } from "app/models/user";

export class Task {
    id: number;
    title: string;
    description: string;
    departmentId: number;
    projectId: number;
    user: User;
}

