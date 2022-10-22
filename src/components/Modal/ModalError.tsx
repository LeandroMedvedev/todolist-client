import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  theme,
} from '@chakra-ui/react';
import { FaExclamation } from 'react-icons/fa';

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const ModalError = ({ isOpen, onClose, message }: ModalErrorProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent color="gray.700">
      <ModalHeader display="flex">
        Erro
        <Center
          background="red.400"
          borderRadius="3px"
          marginLeft="2px"
          width="20px"
          height="30px"
        >
          <FaExclamation color={theme.colors.white} />
        </Center>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>{message}</ModalBody>

      <ModalFooter>
        <Button
          height="50px"
          background="red.400"
          color="white"
          width="100%"
          _hover={{ background: 'red.450' }}
          onClick={onClose}
        >
          Tentar outra vez
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
