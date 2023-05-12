import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InputControl } from '@/components/Form/InputControl';
import { useDefaultForm } from '@/hooks/useDefaultForm';
import { Button } from '@/components/elements/Button/Button';
import { ErrorMessage } from '@/components/elements/ErrorMessage/ErrorMessage';
import { InputPasswordControl } from '@/components/Form/InputPasswordControl';
import { Heading2 } from '@/components/elements/Headline';
import { buttonStyle, container, errorMessageStyle, inputStyle } from './styles.css';
import type { Values } from './SignUpContainer';
import type { FC } from 'react';

type Props = {
  isSubmitting: boolean;
  onSubmit: (params: Values) => void;
};

const schema = z.object({
  name: z.string().min(1, { message: '名前は必須です' }),
  email: z
    .string()
    .min(1, { message: 'メールアドレスは必須です' })
    .email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z.string().min(8, { message: 'パスワードは8文字以上で入力してください' }),
});

const defaultValues: Values = {
  name: '',
  email: '',
  password: '',
};

export const SignUpPresentational: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useDefaultForm<Values>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={container}>
      <Heading2>新規登録</Heading2>

      <InputControl name="name" control={control} className={inputStyle} label={'名前'} />
      {errors.name && (
        <div className={errorMessageStyle}>
          <ErrorMessage message={errors.name.message} />
        </div>
      )}

      <InputControl
        required
        type="email"
        name="email"
        label={'メールアドレス'}
        control={control}
        className={inputStyle}
      />
      {errors.email && (
        <div className={errorMessageStyle}>
          <ErrorMessage message={errors.email.message} />
        </div>
      )}

      <InputPasswordControl
        required
        type="password"
        name="password"
        label={'パスワード'}
        control={control}
        className={inputStyle}
      />
      {errors.password && (
        <div className={errorMessageStyle}>
          <ErrorMessage message={errors.password.message} />
        </div>
      )}

      <Button className={buttonStyle}>新規登録</Button>
    </form>
  );
};
