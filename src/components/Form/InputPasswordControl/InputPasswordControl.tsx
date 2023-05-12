import { useController } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/elements/Input';
import { buttonStyles, container, inputStyle, labelStyle, wrapper } from './styles.css';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

type InputControlProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
} & Omit<React.ComponentProps<typeof Input>, 'inputRef' | 'value' | 'onChange'>;

export const InputPasswordControl = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  className,
  ...props
}: InputControlProps<TFieldValues>) => {
  const {
    field: { ref, ...inputProps },
  } = useController({ name, control });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return (
    <div className={container}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>

      <div className={wrapper}>
        <Input
          {...inputProps}
          {...props}
          inputRef={ref}
          className={`${inputStyle} ${className}`}
          type={showPassword ? 'text' : 'password'}
        />

        <button type="button" onClick={handleTogglePassword} className={buttonStyles}>
          {showPassword ? <EyeOpenIcon /> : <EyeNoneIcon />}
        </button>
      </div>
    </div>
  );
};
