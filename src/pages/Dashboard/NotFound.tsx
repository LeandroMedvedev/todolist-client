import { Box, Center, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { Search } from '../../components/Form/Search';
import { Header } from '../../components/Header';
import { ModalUpdateTask } from '../../components/Modal/ModalUpdateTask';
import { Task } from '../../interfaces/Task';

interface NotFoundProps {
  chosenTask: Task;
  isUpdateTaskOpen: boolean;
  onUpdateTaskClose: () => void;
  taskNotFound: string;
}

export const NotFound = ({
  chosenTask,
  isUpdateTaskOpen,
  onUpdateTaskClose,
  taskNotFound,
}: NotFoundProps) => (
  <>
    <ModalUpdateTask
      task={chosenTask}
      isOpen={isUpdateTaskOpen}
      onClose={onUpdateTaskClose}
    />
    <Box>
      <Header />
      <Search />
      <Center marginTop="4" textAlign="center" display="flex" flexDir="column">
        <Heading size="lg">Nenhuma tarefa encontrada com a descrição </Heading>
        <Text fontSize="3xl" color="red.400" fontWeight="bold">
          {taskNotFound}
        </Text>
        <Box
          marginTop="6"
          width={['80%', '40%']}
          padding="6"
          boxShadow="base"
          background="white"
        >
          <Stack>
            <Skeleton
              width="80%"
              height="20px"
              borderRadius="3px"
              startColor="gray.50"
              endColor="gray.150"
            ></Skeleton>
            <Skeleton
              width="60%"
              height="20px"
              borderRadius="3px"
              startColor="gray.50"
              endColor="gray.150"
            ></Skeleton>
          </Stack>
          <Stack marginTop="8">
            <Skeleton
              height="15px"
              borderRadius="3px"
              startColor="gray.50"
              endColor="gray.150"
            ></Skeleton>
            <Skeleton
              height="15px"
              borderRadius="3px"
              startColor="gray.50"
              endColor="gray.150"
            ></Skeleton>
          </Stack>
        </Box>
      </Center>
    </Box>
  </>
);
