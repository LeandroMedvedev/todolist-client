import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ModalUpdateTask } from '../../components/Modal/ModalUpdateTask';
import { useAuth } from '../../contexts/AuthContext';
import { useTasks } from '../../contexts/TasksContext';
import { Task } from '../../interfaces/Task';
import { FirstTask } from './FirstTask';
import { NotFound } from './NotFound';
import { TaskList } from './TaskList';

export const Dashboard = () => {
  const { token } = useAuth();
  const { loadTasks, notFound, tasks, taskNotFound } = useTasks();

  const [loading, setLoading] = useState(true);
  const [chosenTask, setChosenTask] = useState<Task>({} as Task);

  const {
    isOpen: isUpdateTaskOpen,
    onOpen: onUpdateTaskOpen,
    onClose: onUpdateTaskClose,
  } = useDisclosure();

  useEffect(() => {
    loadTasks(token).then((_) => setLoading(false));
  }, []);

  const manipulateClick = (task: Task) => {
    setChosenTask(task);
    onUpdateTaskOpen();
  };

  if (notFound) {
    return (
      <NotFound
        chosenTask={chosenTask}
        isUpdateTaskOpen={isUpdateTaskOpen}
        onUpdateTaskClose={onUpdateTaskClose}
        taskNotFound={taskNotFound}
      />
    );
  }

  return (
    <>
      <ModalUpdateTask
        task={chosenTask}
        isOpen={isUpdateTaskOpen}
        onClose={onUpdateTaskClose}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TaskList
          loading={loading}
          manipulateClick={manipulateClick}
          tasks={tasks}
        />
      )}
    </>
  );
};
