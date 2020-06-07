import React from 'react'
import Head from 'next/head'
import MemberListPage from 'components/MemberListPage'; 
import ErrorPage from './_error';
import memberSchema from 'lib/memberSchema';
import useMemberList from 'hooks/useMemberList';

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
        <MemberListPage members={members} />
      </div>
    </div>
  );
}
// 
// Members.getInitialProps = async function({ query: { id }}) {
//   const members = await membersApi(id);
//   return {
//     members
//   };
// };

export default Members;
