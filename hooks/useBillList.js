import { useQuery } from '@apollo/react-hooks';
import BILLS_QUERY from 'graphql/bills.query';
import _ from 'lodash';

export default ({ category }) => {
    const { data, ...rest } = useQuery(BILLS_QUERY, {
        variables: { limit: 30 },
    });

    const bills = _.get(data, 'bills', []).map(bill => ({
        id: _.get(bill, 'id', ''),
        readStatus: 2,
        tags: [category],
        title: bill.title,
        meetingDate:  bill.meetingDate,
    }));

    return {
        data: bills,
        original: data,
        ...rest,
    };
}