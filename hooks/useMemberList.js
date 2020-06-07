import { useQuery } from '@apollo/react-hooks';
import MEMBERS_QUERY from '../graphql/members.query';
import _ from 'lodash';

export default () => {
    const { data, ...rest } = useQuery(MEMBERS_QUERY);


    const members = _.get(data, 'members', []).map(member => ({
        id: _.get(member, 'id', ''),
        individualId: _.get(member, 'Individual.id', ''),
        name: _.get(member, 'Individual.name_ch', ''),
        image: `https://legco.g0vhk.io${_.get(member, 'Individual.image', '')}`,
        constituencyType: _.get(member, 'CouncilMembershipType.category', ''),
        constituencyDistrict: _.get(member, 'CouncilMembershipType.sub_category', ''),
        party: {
            name: _.get(member, 'Individual.Party.name_short_ch', ''),
            fullname: _.get(member, 'Individual.Party.name_ch', ''),
            id: _.get(member, 'Individual.Party.id', ''),
        },
        statistic: {
          motionCount: 10,
          voteRate: 0.98,
          attendanceRate: 0.94,
        }
    }));

    return {
        data: members,
        original: data,
        ...rest,
    };
}