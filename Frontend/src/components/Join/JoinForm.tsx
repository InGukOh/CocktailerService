import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { UserForm } from '../UserForm/styles';
import { UserCreateData } from '../../../../types';
import { UserInput } from '../UserForm/UserInput';
import { Select } from '../UserForm/Select';
import { Button } from '@mui/material';
import { JoinSchema } from './JoinSchema';
import { loginChecker } from '../../utils/loginChecker';
import { useNavigate } from 'react-router-dom';
import { EmailDuplicateChecker } from '../UserForm/EmailDuplicateChecker';
import { TelVerifier } from '../UserForm/TelVerification';
import { useAppDispatch } from '../../store/store';
import { userRegister } from '../../store/authActions';

export const JoinForm = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<UserCreateData>({
    resolver: yupResolver(JoinSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const [emailDuplicateCheck, setEmailDuplicateCheck] = useState<
    boolean | null
  >(null);
  const [telVerificationStart, setTelVerificationStart] = useState(false);
  const [telVerificationEnd, setTelVerificationEnd] = useState(false);

  const onSubmitHandler = (data: UserCreateData) => {
    if (emailDuplicateCheck === false) {
      errors.email && (errors.email.message = '이메일 인증을 진행해주세요');
    } else if (telVerificationEnd === false) {
      errors.tel && (errors.tel.message = '전화번호 인증을 진행해주세요');
    } else {
      dispatch(userRegister(data));
      reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UserInput id="name" label="name" name="name" />
        <UserInput id="email" label="email" name="email" type="email" />
        <EmailDuplicateChecker
          emailDuplicateCheck={emailDuplicateCheck}
          setEmailDuplicateCheck={setEmailDuplicateCheck}
        />
        <UserInput
          id="password"
          label="password"
          name="password"
          type="password"
        />
        <UserInput
          id="passwordCheck"
          label="password check"
          name="passwordCheck"
          type="password"
        />
        <UserInput id="birthday" label="birthday" name="birthday" type="date" />
        <UserInput
          id="tel"
          label="phone"
          name="tel"
          placeholder=" - 를 제외하고 입력해주세요"
        />
        <TelVerifier
          telVerificationStart={telVerificationStart}
          setTelVerificationStart={setTelVerificationStart}
          setTelVerificationEnd={setTelVerificationEnd}
        />
        <Select
          id="alcohol"
          label="nickname prefix"
          name="alcohol"
          options={['랜덤', '진', '럼', '보드카', '위스키', '브랜디', '데킬라']}
        />
        <Button type="submit">회원가입</Button>
      </UserForm>
    </FormProvider>
  );
};
