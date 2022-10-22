import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { FaExclamation } from 'react-icons/fa';

import Smile from '../../assets/smile.png';
import { theme } from '../../styles/theme';

interface ModalSuccessProps {
  isOpen: boolean;
  message: string;
  buttonMessage: string;
  onClick: () => void;
  onClose: () => void;
}

export const ModalSuccess = ({
  isOpen,
  message,
  buttonMessage,
  onClick,
  onClose,
}: ModalSuccessProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent color="gray.700" padding="2">
      <HStack>
        <ModalHeader display="flex">
          Sucesso
          <Center
            background="green.400"
            borderRadius="3px"
            marginLeft="2px"
            width="20px"
            height="30px"
          >
            <FaExclamation color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <Image
          src={Smile}
          alt="Smile"
          boxSize={['50px']}
          color={theme.colors.green['400']}
        />
      </HStack>
      <ModalCloseButton />
      <ModalBody>
        <Text>{message}</Text>
      </ModalBody>

      <ModalFooter>
        <Button
          height="50px"
          background="green.400"
          color="white"
          width="100%"
          _hover={{ background: 'green.550' }}
          onClick={onClick}
        >
          {buttonMessage}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
