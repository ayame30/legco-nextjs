
import gql from 'graphql-tag';

const MEMBER_NEWS_QUERY = gql`
  query MemberNews($individualId: Int, $limit: Int) {
    news: legco_IndividualNews(limit: $limit, where: {Individual: {id: {_eq: $individualId}}}, order_by: {News: {date: desc}}) {
      news: News {
        image
        key
        source
        title
        date
        link
      }
    }
  }
`;

export default MEMBER_NEWS_QUERY;