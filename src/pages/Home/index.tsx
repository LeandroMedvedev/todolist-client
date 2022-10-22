import { Button, Center, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdFormatAlignJustify } from 'react-icons/md';
import { IoIosLogIn } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import PersonOnTable from '../../assets/person-sitting-on-table.svg';

import { theme } from '../../styles/theme';

export const Home = () => {
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Flex w="100%" h="98vh" bg="gray.0" flexDir="column">
        <Center w="100%" h="60vh" mt="3">
          <Image
            src={PersonOnTable}
            alt="To-Do List"
            w={['200px', '250px', '300px', '360px']}
          />
        </Center>
        <Center h="170px" p="2">
          <Divider orientation="vertical"></Divider>
          <Text
            bg="gray.0"
            fontSize={['1.1rem', '1rem', '1.3rem', '1.6rem']}
            p="1"
          >
            Problemas para organizar o dia a dia? <br />
            <b>Não mais!</b>
          </Text>
        </Center>
        <Flex
          w="100%"
          h="40vh"
          flexDir={['column', 'column', 'column-reverse', 'row']}
          align="center"
        >
          <Center w="50%" minW="250px" h="100%">
            <Button
              onClick={() => history.push('/signup')}
              w="45%"
              minWidth="200px"
              h={['70px', '80px']}
              variant="outline"
              _hover={{
                border: '1px solid',
                borderColor: 'blue.200',
                transition: '5s',
              }}
              borderRadius="5px"
              fontSize={theme.fontSizes['3xl']}
              color="gray.500"
              boxShadow="4px 3px 20px 0px #1A2B34"
              rightIcon={<MdFormatAlignJustify />}
              transitionDelay="revert"
            >
              Cadastrar
            </Button>
          </Center>
          <Center w="50%" minW="250px" h="100%">
            <Button
              onClick={() => history.push('/signin')}
              w="45%"
              minWidth="200px"
              height={['70px', '80px']}
              variant="outline"
              border="none"
              borderRadius="4px"
              fontSize={theme.fontSizes['3xl']}
              color="white.0"
              bgColor="gray.500"
              boxShadow="4px 3px 20px 4px #1A2B34"
              leftIcon={<IoIosLogIn />}
              _hover={{
                transition: '10s',
              }}
            >
              Entrar
            </Button>
          </Center>
        </Flex>
      </Flex>
    </motion.div>
  );
};
