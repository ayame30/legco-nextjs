import React from 'react'
import Head from 'next/head';
import BillPage from 'components/BillPage';
import { get } from 'api/bills';


const Bill = ({ bill = {} }) => (
  <div>
    <Head>
      <title>議案 - {bill.title}</title>
      <meta name="description" content={bill.description} />
    </Head>
    <div className='hero'>
        <BillPage {...bill} />
    </div>
  </div>
);

Bill.getInitialProps = async function({ query: { id }}) {
  const bill = await get(id);
  return {
    bill
  };
};

export default Bill;
