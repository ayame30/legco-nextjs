import React from 'react'
import Head from 'next/head'
import BillListPage from 'components/BillListPage';

const Bills = () => (
  <div>
    <Head>
      <title>Bills</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
        <BillListPage />
    </div>
  </div>
);

export default Bills;
