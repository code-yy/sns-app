import { useController } from 'react-hook-form';
import { Input } from '@/components/elements/Input';
import { container, inputStyle, labelStyle } from './styles.css';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

type InputControlProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
} & Omit<React.ComponentProps<typeof Input>, 'inputRef' | 'value' | 'onChange'>;

export const InputControl = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  className,
  ...props
}: InputControlProps<TFieldValues>) => {
  const {
    field: { ref, ...inputProps },
  } = useController({ name, control });

  return (
    <div className={container}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>

      <Input {...inputProps} {...props} inputRef={ref} className={`${inputStyle} ${className}`} />
    </div>
  );
};
