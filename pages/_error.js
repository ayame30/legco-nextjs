import React from 'react'
import Head from 'next/head';


const Error = ({ statusCode }) => (
  <div>
    <Head>
      <title>錯誤</title>
    </Head>
    <div className='hero'>
      <div className="text-center p3 overflow-y fullheight">
        <h1><b>Oops...</b></h1>
        {statusCode === 404
          ? <p className="p3">很抱歉，你所找的頁面不存在</p>
          : <p className="p3">很抱歉，我們無法連絡伺服器。<br/>請嘗試稍後再更新。</p>}
      </div>
    </div>
  </div>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
