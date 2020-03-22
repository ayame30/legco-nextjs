import React from 'react'
import Head from 'next/head'
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import MEMBER_QUERY from '../graphql/member.query';
import MemberPage from 'components/MemberPage';
import ErrorPage from './_error';


const Member = ({ id, page }) => {
  
  const { data, loading, error } = useQuery(MEMBER_QUERY, { variables: { id } });
  if (loading) return null;
  if (error) return <ErrorPage />
  
  const member = {
    id: _.get(data, 'member.id', ''),
    individualId: _.get(data, 'member.Individual.id', ''),
    name: _.get(data, 'member.Individual.name_ch', ''),
    party: _.get(data, 'member.Individual.Party.name_short_ch', ''),
    image: `https://legco.g0vhk.io${_.get(data, 'member.Individual.image', '')}`,
    constituencyType: _.get(data, 'member.CouncilMembershipType.category', ''),
    constituencyDistrict: _.get(data, 'member.CouncilMembershipType.sub_category', ''),
  };
  
  const personSchema = JSON.stringify({
    '@context': 'http://schema.org/',
    '@type': 'Person',
    name: member.name,
    sameAs: `/member/${member.id}`,
    url: `/member/${member.id}`,
    image: member.image,
    identifier: member.id,
    memberOf: {
      '@type': 'Organization',
      legalName: _.get(data, 'member.Individual.Party.name_ch', ''),
      identifier: _.get(data, 'member.Individual.Party.id', ''),
      alternateName: member.party,
    },
    jobTitle: `議員 - ${member.constituencyType} - ${member.constituencyDistrict}`,
  });

  return (
    <div>
      <Head>
        <title>Member - {member.name}</title>
        <meta name="description" content={`${member.name} - ${member.party}`} />
        <meta name="keywords" content={`${member.name},${member.party},${member.constituencyDistrict},${member.constituencyType}`} />
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
