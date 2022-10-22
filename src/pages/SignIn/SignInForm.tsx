import {
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import { Input } from '../../components/Form/Input';

interface SignInFormProps {
  manipulateSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignInForm = ({
  manipulateSignIn,
  errors,
  register,
  loading,
}: SignInFormProps) => {
  return (
    <Grid
      onSubmit={manipulateSignIn}
      as="form"
      marginTop="4"
      width={['95%', '60%', '70%', '70%']}
      height="450px"
      minWidth={['300px', '310px', '320px', '350px']}
      padding="15px 20px"
      border="1px solid"
      borderColor="gray.200"
      background="white"
      color="gray.900"
    >
      <Center>
        <Heading
          color="gray.700"
          fontSize="50px"
          fontWeight="light"
          _hover={{ color: 'blue.150' }}
        >
          Login
        </Heading>
      </Center>
      <VStack spacing="5" marginTop="6">
        <Input
          icon={FaEnvelope}
          {...register('email')}
          placeholder="E-mail"
          fontWeight="light"
          type="email"
          error={errors.email}
        />

        <Input
          icon={FaLock}
          {...register('password')}
          placeholder="Senha"
          fontWeight="light"
          label="Senha"
          type="password"
          error={errors.password}
        />
      </VStack>
      <VStack marginTop="4" spacing="5">
        <Button
          isLoading={loading}
          background="blue.900"
          width="100%"
          color="white"
          height="60px"
          borderRadius="8px"
          _hover={{ background: 'blue.920' }}
          type="submit"
          fontWeight="light"
        >
          Entrar
        </Button>
        <HStack>
          <Text color="gray.300" fontSize={['0px', '14px', '14px']}>
            Não possui conta?
          </Text>
          <Link fontWeight="extrabold" color="red.900" href="/signup">
            Cadastre-se
          </Link>
        </HStack>
      </VStack>
    </Grid>
  );
};
