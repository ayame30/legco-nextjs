import React from 'react';
import Head from 'next/head'
import { Router } from 'routes';


const Game = () => (
  <button className="border-radius overflow-hidden fullwidth my-3" onClick={() => Router.pushRoute('/game')}>
    <div
      className="fullwidth backgground-cover bg-red"
      style={{ paddingBottom: '30%' }}
    >
      <div className="h5 position-absolute bottom left fullwidth p3">
        如果你係立法會議員，你會係何君堯定係楊岳橋？
      </div>
    </div>
    <div className="bg-grey3 p2 flex-row flex-middle flex-space-between">
      
      <div className="h3 white p1">
        <i className="fas fa-arrow-right mr-1" />
        上次測試結果
      </div>
      <div className="h3 bg-grey2 grey-2 border-radius p1">
        <i className="fas fa-redo-alt mr-1" />
        重新測試
      </div>
    </div>
  </button>
);

function Games() {
  return (
    <div className="fullheight overflow-overlay">
      <Head>
        <title>立會監察站</title>
        <meta name="description" content="立會監察站" />
      </Head>
      <div className="bg-black p3" style={{ minHeight: '100vh'}}>
        <Game />
        <Game />
      </div>
    </div>
  )
};

Games.getInitialProps = async function() {
  return {

  };
};

export default Games;