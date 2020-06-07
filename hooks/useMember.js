import { useQuery } from '@apollo/react-hooks';
import MEMBER_QUERY from '../graphql/member.query';
import _ from 'lodash';

export default ({ id }) => {
    const { data, loading, error, ...rest } = useQuery(MEMBER_QUERY, {
        variables: { id },
    });
    const member = {
        id: _.get(data, 'member.id', ''),
        individualId: _.get(data, 'member.Individual.id', ''),
        name: _.get(data, 'member.Individual.name_ch', ''),
        party: {
            name: _.get(data, 'member.Individual.Party.name_short_ch', ''),
            fullname: _.get(data, 'member.Individual.Party.name_ch', ''),
            id: _.get(data, 'member.Individual.Party.id', ''),
        },
        image: `https://legco.g0vhk.io${_.get(data, 'member.Individual.image', '')}`,
        constituencyType: _.get(data, 'member.CouncilMembershipType.category', ''),
        constituencyDistrict: _.get(data, 'member.CouncilMembershipType.sub_category', ''),
    };
    return {
        data: member,
        original: data,
        ...rest,
    };
}