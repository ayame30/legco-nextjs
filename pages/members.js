import React from 'react'
import Head from 'next/head'
import MemberList from 'components/MemberList'; 
import ErrorPage from './_error';
import memberSchema from 'lib/memberSchema';
import useMemberList, { query } from 'hooksRestAPI/useMemberList';
import client from '../lib/client';

const Members = () => {
  const { data: members, loading, error } = useMemberList();
  if (loading) return null;
  if (error) return <ErrorPage />;
  const personsSchema = JSON.stringify({
    '@context': 'http://schema.org/',
    "@graph": members.map(memberSchema),
  });
  
  return (
    <div>
      <Head>
        <title>議員列表</title>
        <meta name="description" content="議員列表" />
        <script type="application/ld+json">{personsSchema}</script>
      </Head>
      <div className="hero">
        <MemberList members={members} />
      </div>
    </div>
  );
}

Members.getInitialProps = async function() {
  await query();

  return {};
};

export default Members;
