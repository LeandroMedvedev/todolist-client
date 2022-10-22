import { Box, Center, Grid } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { Search } from '../../components/Form/Search';
import { Header } from '../../components/Header';
import { CardSkeleton } from '../../components/Skeleton/CardSkeleton';
import { Task } from '../../interfaces/Task';

interface TaskListProps {
  loading: boolean;
  tasks: Task[];
  manipulateClick: (task: Task) => void;
}

export const TaskList = ({
  loading,
  tasks,
  manipulateClick,
}: TaskListProps) => {
  return (
    <Box>
      <Header />
      <Search />
      <Grid
        width="100%"
        templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap={5}
        paddingX={['1', '1', '1', '7']}
        marginTop="6"
      >
        {loading ? (
          <CardSkeleton repeatCount={6} />
        ) : (
          tasks.map((task: Task) => (
            <Center key={task.taskUuid} as="span">
              <Card task={task} onClick={manipulateClick} />
            </Center>
          ))
        )}
      </Grid>
    </Box>
  );
};
