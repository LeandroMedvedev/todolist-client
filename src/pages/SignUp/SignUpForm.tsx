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
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

import { Input } from '../../components/Form/Input';

interface SignUpData {
  manipulateSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignUpForm = ({
  manipulateSignUp,
  errors,
  register,
  loading,
}: SignUpData) => {
  return (
    <Grid
      onSubmit={manipulateSignUp}
      as="form"
      marginTop="4"
      height="600px"
      width={['95%', '90%', '70%', '70%']}
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
          Cadastro
        </Heading>
      </Center>
      <VStack spacing="5" marginTop="3">
        <Input
          icon={FaUser}
          {...register('name')}
          placeholder="Nome"
          fontWeight="light"
          error={errors.name}
        />

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
          type="password"
          error={errors.password}
        />
        <Input
          icon={FaLock}
          {...register('confirmPassword')}
          placeholder="Confirmar senha"
          fontWeight="light"
          type="password"
          error={errors.confirmPassword}
        />
      </VStack>
      <VStack marginTop="3" spacing="2">
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
          Cadastrar
        </Button>
        <HStack>
          <Text color="gray.300" fontSize={['0px', '14px', '14px']}>
            Já possui conta?
          </Text>
          <Link fontWeight="extrabold" color="red.900" href="/signin">
            Entrar
          </Link>
        </HStack>
      </VStack>
    </Grid>
  );
};
