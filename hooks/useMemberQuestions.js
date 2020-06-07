import { useQuery } from '@apollo/react-hooks';
import MEMBER_QUESTIONS_QUERY from 'graphql/memberQuestions.query';
import _ from 'lodash';

export default ({ member }) => {
    const { data, ...rest } = useQuery(MEMBER_QUESTIONS_QUERY, {
        variables: { individualId: member.individualId, limit: 5 },
        skip: !member.individualId,
    });

    const questions = _.get(data, 'questions', []).map((question) => ({
        id: question.key,
        link: question.link,
        title: question.title_ch,
        type: question.question_type,
    }));
    return {
        data: questions,
        original: data,
        ...rest,
    };
}