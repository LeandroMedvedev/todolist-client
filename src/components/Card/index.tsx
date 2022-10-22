import { CalendarIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Heading,
  HStack,
  Text,
  theme,
} from '@chakra-ui/react';
import format from 'moment';
import { IoCheckmarkSharp, IoTrashOutline } from 'react-icons/io5';
import { useAuth } from '../../contexts/AuthContext';
import { useTasks } from '../../contexts/TasksContext';
import { Task } from '../../interfaces/Task';

interface CardProps {
  onClick: (task: Task) => void;
  task: Task;
}

export const Card = ({ onClick, task }: CardProps) => {
  const { completeTask, deleteTask } = useTasks();
  const { token } = useAuth();

  const taskCreatedAt = format(task.createdAt).calendar();

  return (
    <Box
      cursor="pointer"
      width={['310px', '70vw', '50vw', 'auto']}
      padding="5"
      boxShadow="4px 3px 20px 4px #EFF0EB"
      borderRadius="8px"
      borderColor="gray.50"
      borderWidth="1px"
      minWidth="90%"
      _hover={{ transform: 'translateY(-6px)', borderColor: 'gray.100' }}
      transition="border 0.2s, ease 0s, transform 0.2s"
    >
      <Flex justify="space-between">
        <Box onClick={() => onClick(task)}>
          {task.completed ? (
            <Heading
              as="h1"
              size="md"
              dangerouslySetInnerHTML={{
                __html: `<s>${task.description}</s>`,
              }}
            ></Heading>
          ) : (
            <Heading as="h1" size="md">
              {task.description}
            </Heading>
          )}
        </Box>
        <HStack spacing="4">
          <Center
            as="button"
            width="30px"
            height="30px"
            background="white.0"
            borderWidth="1px"
            borderColor="red.800"
            borderRadius="5px"
            onClick={() => deleteTask(task.taskUuid, token)}
          >
            <IoTrashOutline color={theme.colors.red[800]} />
          </Center>
          <Center
            as="button"
            width="30px"
            height="30px"
            borderWidth="1px"
            borderColor="green.600"
            borderRadius="5px"
            background="white.0"
            onClick={() => completeTask(task.taskUuid, token)}
          >
            <IoCheckmarkSharp color={theme.colors.green[600]} />
          </Center>
        </HStack>
      </Flex>
      <Box width="100%" marginTop="4">
        <CircularProgress
          color="blue.600"
          thickness="16px"
          marginTop="2.5"
          value={task.completed ? 100 : 40}
          mb="1"
        />
        <Center bg="gray.50">
          <CalendarIcon m="2" />
          <Text color="gray.200" marginTop="3">
            {taskCreatedAt}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
