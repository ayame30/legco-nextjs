import React from 'react'
import Head from 'next/head'
import membersApi from 'api/members';
import MemberListPage from 'components/MemberListPage'; 

const Members = ({ members }) => (
  <div>
    <Head>
      <title>Members</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <MemberListPage members={members} />
    </div>
  </div>
);
Members.getInitialProps = async function({ query: { id }}) {
  const members = await membersApi(id);
  return {
    members
  };
};

export default Members;
