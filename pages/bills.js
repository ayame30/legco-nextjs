import React from 'react'
import Head from 'next/head'
import BillListPage from 'components/BillListPage';

const Bills = () => (
  <div>
    <Head>
      <title>議案列表</title>
      <meta name="description" content="議案列表" />
    </Head>
    <div className="hero">
        <BillListPage />
    </div>
  </div>
);

export default Bills;
