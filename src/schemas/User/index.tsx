import { object, ref, string } from 'yup';

export const signInSchema = object().shape({
  email: string().email('E-mail inválido').required('E-mail requerido'),
  password: string().required('Senha requerida'),
});

export const signUpSchema = object().shape({
  name: string().required('Nome requerido'),
  email: string().email('E-mail inválido').required('E-mail requerido'),
  password: string().required('Senha requerida'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Senhas não correspondem')
    .required('Confirmação requerida'),
});
