'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/basic/button';
import Input from '@/components/basic/input';
import ErrorLabel from '@/components/basic/errorlabel';

import { HStack, VStack } from '@/components/basic/stack';

import { useAnimationTimeout } from '@/lib/hooks/timeout';

import { RightIcon } from '@/icons';
import { apiSendEmail } from '@/lib/api/login';
import { Spinner2 } from '@/components/basic/spinner';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@korea\.ac\.kr$/;
  return re.test(String(email).toLowerCase());
};

export default function Step1({
  nextStep,
  input,
  setInput,
}: {
  nextStep: () => void;
  input: SignupRequest;
  setInput: React.Dispatch<SignupRequest>;
}) {
  const route = useRouter();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInput({
      ...input,
      [event.target.id]: value,
    });
  }

  const [error, setError] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [timeout, resetTimeout] = useAnimationTimeout(200);

  useEffect(() => {
    setIsEmailValid(validateEmail(input.email));
  }, [input.email]);

  async function handleSendEmail() {
    setLoading(true);

    const response = await apiSendEmail({ email: input.email.split('@')[0] || '' });

    if (response.status === 'SUCCESS') {
      const id = input.email;
      setInput({ ...input, [input.email]: id.slice(0, -12) });
      nextStep();
    } else {
      setError(
        '인증번호 발송을 실패하였습니다. 잠시 후 다시 시도해주세요. 계속해서 실패하는 경우 서버 상의 문제일 수 있습니다.',
      );
      resetTimeout();
    }
  }

  return (
    <HStack gap="20px">
      <span className="text-4xl">환영합니다!</span>
      <span className="text-2xl">고려대학교 이메일로 학생인증을 해주세요.</span>
      <Input required type="email" id="email" label="example@korea.ac.kr" onChange={handleInput} autoFocus />
      <ErrorLabel className="text-primary-500" label={error} shake={timeout} />
      <VStack className="w-full h-fit justify-end" gap="36px">
        {loading ? (
          <span className='text-6xl text-primary-500'><Spinner2 /></span>
        ) : (
          <Button
            kind="outline"
            className="flex flex-row justify-around items-center text-xl gap-x-4 px-4"
            variant="contained"
            color="primary"
            disabled={!isEmailValid}
            onClick={isEmailValid ? handleSendEmail : () => undefined}
          >
            <span>다음</span>
            <RightIcon />
          </Button>
        )}
      </VStack>
    </HStack>
  );
}
