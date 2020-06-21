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
        attendanceRecord: _.takeRight(_.get(data, 'attendanceRate', []).map((rate, i) => ({
            datetime: moment(Object.keys(rate)[0]).format('MMM YY'),
            rate: _.floor(Object.values(rate)[0]),
            presentCount: Object.values(_.get(data, `vote_rate.${i}`))[0].present_count,
            absentCount: Object.values(_.get(data, `vote_rate.${i}`))[0].absent_count,
        })), 12),
        voteRecord: _.takeRight(_.get(data, 'voteRate', []).map((rate, i) => ({
            datetime: moment(Object.keys(rate)[0]).format('MMM YY'),
            rate: _.floor(Object.values(rate)[0] * 100),
            voteCount: Object.values(_.get(data, `vote_rate.${i}`))[0].vote_count,
            noVoteCount: Object.values(_.get(data, `vote_rate.${i}`))[0].no_vote_count,
        })), 12),
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