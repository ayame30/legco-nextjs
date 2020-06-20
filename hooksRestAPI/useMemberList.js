import _ from 'lodash';
import { useQuery } from 'react-fetching-library';
import client from 'lib/client';

export default () => {
    const { payload: data = [], ...rest } = useQuery({
        method: 'GET',
        endpoint: '/members/',
      });

    const members = data.map(member => {
        const voteCount = _.get(member, 'vote_rate[0].2020-06-01 00:00:00.vote_count', 0);
        const novoteCount = _.get(member, 'vote_rate[0].2020-06-01 00:00:00.no_vote_count', 0);
        const absentCount = _.get(member, 'attendance_rate[0].2020-06-01 00:00:00.absent_count', 0);
        const presentCount = _.get(member, 'attendance_rate[0].2020-06-01 00:00:00.present_count', 0);

        return {
            id: _.get(member, 'id', ''),
            individualId: _.get(member, 'id', ''),
            name: _.get(member, 'name_zh', ''),
            image: `https://legco.g0vhk.io${_.get(member, 'avatar', '')}`,
            constituencyType: _.get(member, 'constituency_type', ''),
            constituencyDistrict: _.get(member, 'constituency_district', '').split('（')[0],
            party: {
                name: _.get(member, 'political_affiliation', ''),
                fullname: _.get(member, 'political_affiliation', ''),
                id: _.get(member, 'political_affiliation', ''),
            },
            statistic: {
                motionCount: 0,
                voteRate: voteCount / (voteCount + novoteCount),
                attendanceRate: presentCount / (presentCount + absentCount),
            }
        };
    }).sort((a, b) => {
        if (a.constituencyType !== b.constituencyType) {
            return a.constituencyType === 'FC' ? 1 : -1;
        }
        return a.constituencyDistrict.localeCompare(b.constituencyDistrict)
    });

    return {
        ...rest,
        data: members,
        original: data,
    };
}

export const query = async() => client.query({
    method: 'GET',
    endpoint: '/members/',
});