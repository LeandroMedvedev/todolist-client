import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import { Input } from './Input';
import { theme } from '../../styles/theme';
import { ModalCreateTask } from '../Modal/ModalCreateTask';
import { useForm } from 'react-hook-form';
import { useTasks } from '../../contexts/TasksContext';
import { useAuth } from '../../contexts/AuthContext';

interface SearchData {
  [description: string]: any;
}

export const Search = () => {
  const { token } = useAuth();
  const { searchTaskByDescription } = useTasks();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { handleSubmit, register } = useForm();

  const manipulateSearch = ({ description }: SearchData) =>
    searchTaskByDescription(description, token);

  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Flex
        width="100%"
        marginTop="3"
        paddingY="2"
        paddingX={['4', '8']}
        paddingBottom="6"
        borderColor="gray.50"
        borderBottomWidth="1px"
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(manipulateSearch)}
          flexDir={['column', 'column', 'column', 'row']}
        >
          <Input
            placeholder="Pesquisar tarefa"
            width="35vw"
            minWidth="286px"
            fontWeight="light"
            height="50px"
            color="blue.900"
            mr="0.5"
            mb="3"
            {...register('description')}
          />
          <Flex minW="112px" px="0.5">
            <Button
              as="button"
              type="submit"
              width={['55px', '55px', '55px', '60px']}
              minW="55px"
              height="50px"
              fontSize="35px"
              background="blue.900"
              _hover={{ background: 'blue.920' }}
              borderRadius="8px"
              size="20px"
            >
              <BiSearchAlt color={theme.colors.white['0']} />
            </Button>
            <Button
              onClick={onOpen}
              width={['55px', '55px', '55px', '60px']}
              minW="55px"
              height="50px"
              marginLeft="0.5"
              fontSize="35px"
              _hover={{ background: 'blue.920' }}
              background="blue.900"
              borderRadius="8px"
              size="20px"
            >
              <AiOutlinePlus color={theme.colors.white['0']} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
