import { container } from './styles.css';
import type { ChangeEvent, FC, InputHTMLAttributes, Ref } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  inputRef?: Ref<HTMLInputElement>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export const Input: FC<Props> = ({ value, onChange, inputRef, ...rest }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input ref={inputRef} value={value} className={container} onChange={handleChange} {...rest} />;
};
