import { AxiosResponse } from 'axios';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { Task } from '../interfaces/Task';

import { api } from '../services/api';

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextData {
  tasks: Task[];
  notFound: boolean;
  taskNotFound: string;
  createTask: (data: Pick<Task, 'description'>, token: string) => Promise<void>;
  loadTasks: (token: string) => Promise<void>;
  searchTaskByDescription: (
    description: string,
    token: string
  ) => Promise<void>;
  completeTask: (taskUuid: string, token: string) => Promise<void>;
  updateTask: (
    taskUuid: string,
    data: Pick<Task, 'description'>,
    token: string
  ) => Promise<void>;
  deleteTask: (taskUuid: string, token: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within an TaskProvider');
  }

  return context;
};

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [notFound, setNotFound] = useState(false);
  const [taskNotFound, setTaskNotFound] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback(
    async (data: Pick<Task, 'description'>, token: string) => {
      await api
        .post('/tasks', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response: AxiosResponse<Task>) =>
          setTasks((oldTasks) => [...oldTasks, response.data])
        )
        .catch((error) => console.log(error));
    },
    []
  );

  const loadTasks = useCallback(async (token: string) => {
    try {
      const response = await api.get('/tasks/own', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchTaskByDescription = useCallback(
    async (description: string, token: string) => {
      try {
        const response = await api.get(
          `/tasks/description/?description=${description}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!response.data.length) {
          setTaskNotFound(description);
          return setNotFound(true);
        }

        setNotFound(false);
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const completeTask = useCallback(
    async (taskUuid: string, token: string) => {
      try {
        await api.patch(
          `/tasks/${taskUuid}`,
          {
            completed: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const otherTasks = tasks.filter((task) => task.taskUuid !== taskUuid);
        const taskToUpdated = tasks.find((task) => task.taskUuid === taskUuid);

        if (taskToUpdated) {
          taskToUpdated.completed = true;
          setTasks([...otherTasks, taskToUpdated]);
        }
      } catch (error) {}
    },
    [tasks]
  );

  const updateTask = useCallback(
    async (
      taskUuid: string,
      data: Pick<Task, 'description'>,
      token: string
    ) => {
      await api
        .patch(`/tasks/${taskUuid}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response: AxiosResponse<Task>) => {
          const otherTasks = tasks.filter((task) => task.taskUuid !== taskUuid);
          const taskToUpdated = tasks.find(
            (task) => task.taskUuid === taskUuid
          );

          taskToUpdated && setTasks([...otherTasks, response.data]);
        })
        .catch((error) => console.log(error));
    },
    [tasks]
  );

  const deleteTask = useCallback(
    async (taskUuid: string, token: string) => {
      try {
        await api.delete(`/tasks/${taskUuid}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const remainingTasks = tasks.filter(
          (task) => task.taskUuid !== taskUuid
        );
        setTasks(remainingTasks);
      } catch (error) {
        console.log(error);
      }
    },
    [tasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        notFound,
        taskNotFound,
        createTask,
        loadTasks,
        searchTaskByDescription,
        completeTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, useTasks };
