import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { useTasks } from '../../contexts/TasksContext';

import { theme } from '../../styles/theme';
import { TextArea } from '../Form/TextArea';
import { useState } from 'react';
import { Task, TaskData } from '../../interfaces/Task';
import { updateTaskSchema } from '../../schemas/Task';

interface ModalUpdateTaskProps {
  task: Pick<Task, 'taskUuid' | 'description'>;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalUpdateTask = ({
  task,
  isOpen,
  onClose,
}: ModalUpdateTaskProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateTaskSchema),
  });

  const { updateTask } = useTasks();
  const { token } = useAuth();
  const [description, setDescription] = useState('');

  const manipulateUpdateTask = (data: TaskData) => {
    updateTask(task.taskUuid, data, token);
    onClose();
    setDescription('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(manipulateUpdateTask)}
        color="gray.700"
        padding="2"
      >
        <HStack width="100%">
          <ModalHeader
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <EditIcon fontSize={theme.fontSizes['3xl']} />
            <Text width="300px" align="center" fontSize="2xl">
              Atualizar descrição
            </Text>
          </ModalHeader>
          <ModalCloseButton />
        </HStack>
        <ModalBody>
          <VStack spacing="5">
            <TextArea
              error={errors.description}
              {...register('description')}
              placeholder="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            type="submit"
            height="50px"
            background="blue.920"
            color="white"
            width="100%"
            _hover={{ background: 'blue.900' }}
            onClick={manipulateUpdateTask}
          >
            Atualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
