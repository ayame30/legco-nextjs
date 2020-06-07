import React from 'react'
import Head from 'next/head'
import BillList from 'components/BillList';

const Bills = () => (
  <div>
    <Head>
      <title>議案列表</title>
      <meta name="description" content="議案列表" />
    </Head>
    <div className="hero">
        <BillList />
    </div>
  </div>
);

export default Bills;
