
import gql from 'graphql-tag';

const MEMBER_QUESTIONS_QUERY = gql`
  query MemberQuestions($individualId: Int, $limit: Int) {
    questions: legco_Question(limit: $limit, where: {individual: {_eq: $individualId}}, order_by: {date: desc}) {
      date
      individual
      key
      link
      question_type
      title
      title_ch
    }
  }
`;

export default MEMBER_QUESTIONS_QUERY;