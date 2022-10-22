import { Flex, useDisclosure } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { SignUpInfo } from './SignUpInfo';
import { SignUpForm } from './SignUpForm';
import { api } from '../../services/api';
import { ModalSuccess } from '../../components/Modal/ModalSuccess';
import { ModalError } from '../../components/Modal/ModalError';
import { signUpSchema } from '../../schemas/User';

interface SignUpData {
  [key: string]: any;
}

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const manipulateSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post('/users/signup', { name, email, password })
      .then((_) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((error) => {
        setLoading(false);
        onModalErrorOpen();
        console.log(error);
      });
  };

  const history = useHistory();

  return (
    <>
      <ModalSuccess
        message="Cadastro finalizado!"
        buttonMessage="Ir para login"
        onClick={() => history.push('/signin')}
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        message="E-mail possivelmente já cadastrado."
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
          'linear(to-l, green.0 65%, white 35%)',
          'linear(to-l, green.0 65%, white 35%)',
        ]}
        color="white"
      >
        <Flex
          width={['100vh', '100vh', '90%', '65%']}
          justifyContent="center"
          alignItems="center"
        >
          <SignUpForm
            manipulateSignUp={handleSubmit(manipulateSignUp)}
            errors={errors}
            register={register}
            loading={loading}
          />
          <SignUpInfo />
        </Flex>
      </Flex>
    </>
  );
};
