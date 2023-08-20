import Head from 'next/head';
import Login from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <h1>Login</h1>
      <Login />
    </>
  );
}
