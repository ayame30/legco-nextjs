import _ from 'lodash';
import { useQuery } from 'react-fetching-library';
import client from 'lib/client';
import moment from 'moment';

const getReadingStatus = (bill) => {
    if (bill.reading.third_reading_date && moment().isAfter(bill.reading.third_reading_date)) {
        return 3;
    }
    if (bill.reading.second_reading_date && moment().isAfter(bill.reading.second_reading_date)) {
        return 2;
    }
    if (bill.reading.first_reading_date && moment().isAfter(bill.reading.first_reading_date)) {
        return 1;
    }
    return 0;
};
const getNextMeetingDate = (bill) => {
    const nextMeeting = _.takeRight(bill.meeting, 1);
    return _.get(nextMeeting, '0.date');
}

export default ({ category }) => {
    const { payload: data = [], ...rest } = useQuery({
        method: 'GET',
        endpoint: '/bills/',
    });


    const bills = data.map(bill => ({
        id: _.get(bill, 'internal_key', ''),
        readStatus: getReadingStatus(bill),
        tags: bill.tag.keywords.split('，').filter(s => s !== '#N/A'),
        title: bill.bill_title_chi,
        meetingDate:  getNextMeetingDate(bill),
    })).sort((a, b) => {
        if (!a.meetingDate) return 1;
        if (!b.meetingDate) return -1;
        return moment(b.meetingDate).diff(a.meetingDate);
    }).filter((bill) => {
        if (!category || category === '全部') return true;
        if (bill.tags.join(',').includes(category)) return true;
        return false;
    });

    console.log(bills)

    return {
        ...rest,
        data: bills,
        original: data,
    };
}

export const query = async() => client.query({
    method: 'GET',
    endpoint: '/bills/',
});