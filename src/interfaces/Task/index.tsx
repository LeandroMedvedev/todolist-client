export interface Task {
  taskUuid: string;
  description?: string;
  createdAt: Date;
  completed: boolean;
  userUuid: string;
}

export interface TaskData {
  [description: string]: any;
}
