import { object, string } from 'yup';

export const createTaskSchema = object().shape({
  description: string()
    .max(80, 'Máximo de 80 caracteres')
    .required('Campo requerido'),
});

export const updateTaskSchema = object().shape({
  description: string()
    .max(80, 'Máximo de 80 caracteres')
    .required('Campo requerido'),
});
