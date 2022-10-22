import { Box, Button, Center, Heading, useDisclosure } from '@chakra-ui/react';
import { FaClipboard } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { ModalCreateTask } from '../../components/Modal/ModalCreateTask';
import { theme } from '../../styles/theme';

export const FirstTask = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Header />

      <Box
        w="90vw"
        py="16"
        px="8"
        ml="5vw"
        mt="4"
        borderWidth="2px"
        borderColor="gray.150"
        borderStyle="dashed"
        borderRadius="8px"
        justifyContent="center"
        textAlign="center"
      >
        <Center fontSize="5xl">
          <FaClipboard color={theme.colors.gray['700']} />
        </Center>
        <Heading as="h1" mt="4" fontSize="4xl" color="gray.150">
          Crie sua primeira tarefa
        </Heading>
        <Button
          h="60px"
          onClick={onOpen}
          mt="12"
          p="6"
          color="white.0"
          _hover={{ bg: 'blue.920' }}
          bg="blue.900"
        >
          Criar primeira tarefa
        </Button>
      </Box>
    </>
  );
};
