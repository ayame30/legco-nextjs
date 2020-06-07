import { useQuery } from '@apollo/react-hooks';
import MEMBER_VOTE_QUERY from 'graphql/memberVote.query';
import _ from 'lodash';

export default ({ member }) => {
    const { data, ...rest } = useQuery(MEMBER_VOTE_QUERY, {
        variables: { individualId: member.individualId },
        skip: !member.individualId,
    });

    const voteCount = {
        yes: _.get(data, 'yes.aggregate.count', 0),
        no: _.get(data, 'no.aggregate.count', 0),
        abstain: _.get(data, 'abstain.aggregate.count', 0),
        absent: _.get(data, 'absent.aggregate.count', 0),
        present: _.get(data, 'present.aggregate.count', 0)
    };

    return {
        data: voteCount,
        original: data,
        ...rest,
    };
}