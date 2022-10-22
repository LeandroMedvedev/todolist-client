import { Task } from '../Task';

export interface User {
  userUuid: string;
  name: string;
  email: string;
  tasks: Task[];
}
