import {
  FormControl,
  FormErrorMessage,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';

import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons/lib';

interface InputProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVarianceOptions = {
  [key: string]: string;
};

const inputVariance: inputVarianceOptions = {
  error: 'red.800',
  default: 'gray.200',
  filled: 'green.500',
  focus: 'blue.900',
};

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputProps
> = ({ name, label, error = null, icon: Icon, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const [variance, setVariance] = useState('default');

  useEffect(() => {
    if (error) {
      return setVariance('error');
    }
  }, [error]);

  const manipulateInputFocus = useCallback(() => {
    if (!error) {
      setVariance('focus');
    }
  }, [error]);

  const manipulateInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariance('filled');
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={inputVariance[variance]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraTextarea
          name={name}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          color={inputVariance[variance]}
          borderColor={inputVariance[variance]}
          onFocus={manipulateInputFocus}
          onBlurCapture={manipulateInputBlur}
          variant="outline"
          _hover={{ backgroundColor: 'gray.0' }}
          _placeholder={{ color: 'gray.200' }}
          background="gray.50"
          _focus={{ bg: 'gray.100' }}
          size="lg"
          height="60px"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const TextArea = forwardRef(TextAreaBase);
