import _ from 'lodash';

export default (member) => ({
    '@context': 'http://schema.org/',
    '@type': 'Person',
    name: member.name,
    sameAs: `/member/${member.id}`,
    url: `/member/${member.id}`,
    image: member.image,
    identifier: member.id,
    memberOf: {
        '@type': 'Organization',
        legalName: _.get(member, 'party.fullname'),
        identifier: _.get(member, 'party.id'),
        alternateName: _.get(member, 'party.name'),
    },
    jobTitle: `議員 - ${member.constituencyType} - ${member.constituencyDistrict}`,
})