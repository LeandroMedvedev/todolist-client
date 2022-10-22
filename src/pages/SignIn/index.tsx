import { Flex, useDisclosure } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../contexts/AuthContext';
import { SignInInfo } from './SignInInfo';
import { SignInForm } from './SignInForm';
import { ModalError } from '../../components/Modal/ModalError';
import { signInSchema } from '../../schemas/User';

interface SignInData {
  [key: string]: any;
}

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const manipulateSignIn = ({ email, password }: SignInData) => {
    setLoading(true);
    signIn({ email, password })
      .then((_) => setLoading(false))
      .catch((_) => {
        onModalErrorOpen();
        setLoading(false);
      });
  };

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  return (
    <>
      <ModalError
        message="Credenciais inválidas."
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
      />
      <Flex
        padding={['10px 15px', '10px 15px', '0px', '0px']}
        alignItems="center"
        justifyContent="center"
        height={['auto', 'auto', '98vh', '98vh']}
        bgGradient={[
          'linear(to-b, green.0 65%, white 35%)',
          'linear(to-b, green.0 65%, white 35%)',
          'linear(to-r, green.0 65%, white 35%)',
          'linear(to-r, green.0 65%, white 35%)',
        ]}
        color="white"
      >
        <Flex
          width={['100%', '100%', '90%', '65%']}
          justifyContent="center"
          alignItems="center"
        >
          <SignInInfo />
          <SignInForm
            manipulateSignIn={handleSubmit(manipulateSignIn)}
            errors={errors}
            register={register}
            loading={loading}
          />
        </Flex>
      </Flex>
    </>
  );
};
