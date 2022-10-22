import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import ToDoIcon from '../../assets/todo-icon.jpg';

export const SignInInfo = () => (
  <Grid
    display={['none', 'none', 'none', 'block']}
    paddingRight={['0px', '0px', '0px', '100px']}
    color="blue.900"
  >
    <Image
      src={ToDoIcon}
      alt="ToDo"
      display={['none', 'none', 'none', 'block']}
      boxSize={['0px', '0px', '90%', '100%']}
    />
    <Heading
      marginTop="4"
      as="h1"
      fontSize={['40px', '40px', '40px', '50px']}
      display={['none', 'none', 'none', 'block']}
      _hover={{ color: 'blue.920' }}
    >
      To-Do List
    </Heading>
    <Box display={['none', 'none', 'none', 'block']}>
      <Text
        width={['0px', '0px', '260px', '280px']}
        fontSize="16px"
        _hover={{ color: 'blue.920' }}
      >
        Sua lista de tarefas em um único lugar, <b>simples assim.</b>
      </Text>
    </Box>
  </Grid>
);
