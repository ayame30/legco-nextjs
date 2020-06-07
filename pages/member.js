import React from 'react'
import Head from 'next/head'
import _ from 'lodash';
import MemberPage from 'components/MemberPage';
import ErrorPage from './_error';
import useMember from 'hooks/useMember';
import memberSchema from 'lib/memberSchema';


const Member = ({ id, page }) => {
  
  const { data: member, loading, error } = useMember({ id });
  if (loading) return null;
  if (error) return <ErrorPage />
  
  const personSchema = JSON.stringify(memberSchema(member));

  return (
    <div>
      <Head>
        <title>Member - {member.name}</title>
        <meta name="description" content={`${member.name} - ${member.party}`} />
        <meta name="keywords" content={`${member.name},${member.party.name},${member.constituencyDistrict},${member.constituencyType}`} />
        <script type="application/ld+json">{personSchema}</script>
      </Head>
      <MemberPage page={page} id={id} member={member}/>
    </div>
  );
}

Member.getInitialProps = async function({ query, query: { id, page }}) {
  console.log(query);
  return { id, page };
};

export default Member;
