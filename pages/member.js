import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../graphql/job.query';


const Home = () => {
  const { data, loading, error } = useQuery(JOBS_QUERY);
console.log(data, error, loading);
  return (
    <div>
      <Head>
        <title>Member</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
          Hi
      </div>
    </div>
  );
}
export default Home;
