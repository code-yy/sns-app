/**
 * @see {@link https://zenn.dev/yuitosato/articles/292f13816993ef}
 */
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';

const useDefaultForm = <T extends FieldValues>(
  props: UseFormProps<T> & {
    defaultValues: T;
  }
): UseFormReturn<T> => {
  return useForm(props);
};

export { useDefaultForm };
