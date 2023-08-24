import Head from 'next/head';
import SignUp from '@/components/accounts/SignUpForm';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <SignUp />
    </>
  );
}
