import React from 'react';
import Head from 'next/head'
import SimilarityGame from 'components/SimilarityGame';

function Game() {
  return (
    <div className="fullheight overflow-overlay">
      <Head>
        <title>立會監察站</title>
        <meta name="description" content="立會監察站" />
      </Head>
      <div className="bg-black p3" style={{ minHeight: '100vh'}}>
        <SimilarityGame />
      </div>
    </div>
  )
};

Game.getInitialProps = async function() {
  return {

  };
};

export default Game;