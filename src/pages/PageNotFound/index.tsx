import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import FourZeroFour from '../../assets/browser-error.svg';

export const PageNotFound = () => {
  const history = useHistory();
  return (
    <Flex
      w="100%"
      h="70%"
      padding={['10px 15px', '10px 15px', '0px', '0px']}
      alignItems="center"
      justifyContent="center"
      height={['auto', 'auto', '98vh', '98vh']}
    >
      <Box mt="4" borderRadius="6px" bg="gray.50" p="8">
        <Heading>Puxaa!</Heading>
        <Image src={FourZeroFour} />

        <Text mt="4" fontSize={['1xl', '1xl', '1xl', '2xl']}>
          Página não encontrada! <br />
          <b>Confira o endereço digitado.</b>
        </Text>
        <Button
          onClick={() => history.push('/signin')}
          w="100%"
          h="60px"
          mt="4"
          bg="red.400"
          color="white.0"
          _hover={{ bg: 'red.450' }}
        >
          Ir para suas tarefas
        </Button>
      </Box>
    </Flex>
  );
};
