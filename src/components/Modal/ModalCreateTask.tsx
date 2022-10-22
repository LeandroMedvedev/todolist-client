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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaClipboard } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { useTasks } from '../../contexts/TasksContext';
import { TaskData } from '../../interfaces/Task';
import { createTaskSchema } from '../../schemas/Task';

import { theme } from '../../styles/theme';
import { TextArea } from '../Form/TextArea';

interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCreateTask = ({ isOpen, onClose }: ModalCreateTaskProps) => {
  const [description, setDescription] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const { createTask } = useTasks();

  const { token } = useAuth();

  const manipulateCreateTask = (data: TaskData) =>
    createTask(data, token).then((_) => {
      onClose();
      setDescription('');
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(manipulateCreateTask)}
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
            <FaClipboard
              color={theme.colors.white}
              fontSize={theme.fontSizes['3xl']}
            />
            <Text width="300px" align="center" fontSize="2xl">
              Nova tarefa
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
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
