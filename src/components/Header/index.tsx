import { Center, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { Menu } from './Menu';

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      h="15vh"
      borderBottom="1px"
      borderBottomColor="gray.0"
      paddingX="8"
      paddingY="4"
      boxShadow="4px 3px 20px 0px #F2F2F2"
    >
      <Flex align="center">
        <Center
          marginRight="0.5"
          background="blue.400"
          width="60px"
          height="60px"
          borderRadius="8px"
        >
          <Text color="white.0" fontSize="4xl" fontWeight="extrabold">
            TO
          </Text>
        </Center>
        <Center
          background="blue.400"
          width="60px"
          height="60px"
          borderRadius="8px"
        >
          <Text color="white.0" fontSize="4xl" fontWeight="extrabold">
            DO
          </Text>
        </Center>
        <Heading ml="4" size="lg" color="gray.500">
          List
        </Heading>
      </Flex>
      <Center
        ml="auto"
        onClick={onToggle}
        as="button"
        fontSize={['2.5rem', '2.5rem', '2.5rem', '3rem']}
      >
        <FaBars color={theme.colors.gray['300']} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
