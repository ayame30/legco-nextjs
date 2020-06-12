import React from 'react'
import Head from 'next/head';
import BillPage from 'components/BillPage';
import useBill from 'hooks/useBill';
import _ from 'lodash';

const Bill = ({ id }) => {
  const { data, loading, error } = useBill({ id });
  if (loading) return null;

  return (
    <div>
      <Head>
        <title>議案 - {data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className='hero'>
          <BillPage {...data} />
      </div>
    </div>
  );
}
Bill.getInitialProps = async function({ query: { id }}) {
  return {
    id
  };
};

export default Bill;
