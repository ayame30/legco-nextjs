
import gql from 'graphql-tag';

const BILLS_QUERY = gql`
  query Bills($individualId: Int, $limit: Int) {
    bills: legco_Bill(limit: $limit, order_by: {bill_gazette_date: desc}) {
      author: proposed_by_chi
      title: bill_title_chi
      id: internal_key
    }
  }
`;

export default BILLS_QUERY;