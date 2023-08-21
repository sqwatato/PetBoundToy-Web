import Head from 'next/head';
import Login from '@/components/OpportunityForm';
import Opportunities from '../opportunities/page';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Create Opportunity</title>
      </Head>
      <h1>Create Opportunity</h1>
      <Opportunities />
    </>
  );
}
