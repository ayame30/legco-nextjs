import React from 'react'
import Head from 'next/head'
import MemberListPage from 'components/MemberListPage'; 
import MEMBERS_QUERY from '../graphql/members.query';
import { useQuery } from '@apollo/react-hooks';
import ErrorPage from './_error';


const Members = () => {
  const { data, loading, error } = useQuery(MEMBERS_QUERY);
  if (loading) return null;
  if (error) return <ErrorPage />;
  const members = (data.legco_CouncilMembers || []).map(m => ({
    id: m.id,
    name: m.Individual.name_ch,
    party: m.Individual.Party && m.Individual.Party.name_short_ch,
    party_full: m.Individual.Party && m.Individual.Party.name_ch,
    party_id: m.Individual.Party && m.Individual.Party.id,
    image: `https://legco.g0vhk.io${m.Individual.image}`,
    constituencyType: m.CouncilMembershipType.category,
    constituencyDistrict: m.CouncilMembershipType.sub_category,
    statistic: {
      motionCount: 10,
      voteRate: 0.98,
      attendanceRate: 0.94,
    }
  }));
  const personsSchema = JSON.stringify({
    '@context': 'http://schema.org/',
    "@graph": members.map(member => ({
      '@type': 'Person',
      name: member.name,
      sameAs: `/member/${member.id}`,
      url: `/member/${member.id}`,
      image: member.image,
      identifier: member.id,
      memberOf: {
        '@type': 'Organization',
        legalName: member.party_full,
        identifier: member.party_id,
        alternateName: member.party,
      },
      jobTitle: `議員 - ${member.constituencyType} - ${member.constituencyDistrict}`,
    }))
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
