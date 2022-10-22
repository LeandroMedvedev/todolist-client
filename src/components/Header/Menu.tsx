import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { IoLogOut } from 'react-icons/io5';

import { useAuth } from '../../contexts/AuthContext';
import { theme } from '../../styles/theme';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { signOut, user } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay marginTop="12vh" />
      <DrawerContent
        marginLeft="auto"
        marginTop="77px"
        width={['450px', '350px']}
      >
        <DrawerHeader
          borderColor="gray.150"
          color="gray.500"
          borderBottomWidth="1px"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex align="center" onClick={signOut} _hover={{ cursor: 'pointer' }}>
            <Center
              width="60px"
              height="60px"
              borderRadius="8px"
              border="0.5px solid #EFF0EB"
              fontSize="2xl"
            >
              <IoLogOut fontSize="50px" color={theme.colors.red['800']} />
            </Center>
            <Box marginLeft="4">
              <Heading as="h2" color="gray.500" fontSize="lg" fontWeight="thin">
                Sair
              </Heading>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
