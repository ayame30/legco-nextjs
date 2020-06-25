import _ from 'lodash';
import { useQuery } from 'react-fetching-library';
import client from 'lib/client';
import moment from 'moment';

export default (id) => {
    const { payload: data = [], ...rest } = useQuery({
        method: 'GET',
        endpoint: '/member/' + id + '/',
    });

    const member = {
        id: _.get(data, 'id', ''),
        individualId: _.get(data, 'id', ''),
        name: _.get(data, 'name_zh', ''),
        party: {
            name: _.get(data, 'political_affiliation', ''),
            fullname: _.get(data, 'political_affiliation', ''),
            id: _.get(data, 'political_affiliation', ''),
        },
        image: `https://legco.g0vhk.io${_.get(data, 'avatar', '')}`,
        constituencyType: _.get(data, 'constituency_type', ''),
        constituencyDistrict: _.get(data, 'constituency_district', ''),
        attendanceRecord: _.get(data, 'stats', []).map((rate, i) => ({
            datetime: moment(rate.date).format('MMM YY'),
            rate: _.round(rate.attendance_rate * 100),
            presentCount: rate.present_count,
            absentCount: rate.absent_count,
        })),
        voteRecord: _.get(data, 'stats', []).map((rate, i) => ({
            datetime: moment(rate.date).format('MMM YY'),
            rate: _.round(rate.vote_rate * 100),
            voteCount: rate.vote_count,
            noVoteCount: rate.no_vote_count,
        })),
        voteStats: _.get(data, 'stats', []).reduce((acc, stats) => ({
            yes: acc.yes + stats.yes_count,
            no: acc.no + stats.no_count,
            absent: acc.absent + stats.absent_count,
            abstain: acc.abstain + stats.abstain_count,
            present: acc.present + stats.present_count,
        }), {
            yes: 0,
            no: 0,
            absent: 0,
            abstain: 0,
            present: 0,
        })
    };
    
    return {
        ...rest,
        data: member,
        original: data,
    };
}

export const query = async(id) => client.query({
    method: 'GET',
    endpoint: '/member/' + id + '/',
});