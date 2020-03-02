import React from 'react'
import Head from 'next/head'
import membersApi from 'api/members';
import MemberListPage from 'components/MemberListPage'; 
import MEMBERS_QUERY from '../graphql/members.query';
import { useQuery } from '@apollo/react-hooks';


const Members = ({ members }) => {
  const { data, loading, error } = useQuery(MEMBERS_QUERY);
  if (loading) return null;
  return (
    <div>
      <Head>
        <title>Members</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <MemberListPage members={data.legco_CouncilMembers.map(m => ({
            id: m.id,
            name: m.Individual.name_ch,
            party: m.Individual.Party && m.Individual.Party.name_short_ch,
            image: `https://legco.g0vhk.io${m.Individual.image}`,
            constituencyType: m.CouncilMembershipType.category,
            constituencyDistrict: m.CouncilMembershipType.sub_category,
            statistic: {
              motionCount: 10,
              voteRate: 0.98,
              attendanceRate: 0.94,
            }
          }))} />
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
