
import gql from 'graphql-tag';

const BILLS_QUERY = gql`
  query Bills($individualId: Int, $limit: Int) {
    bills: legco_Bill(limit: $limit, order_by: {bill_gazette_date: desc}) {
      ordinance_title_chi
      author: proposed_by_chi
      remarks_chi
      title: bill_title_chi
      bill_gazette_date
    }
  }
`;

export default BILLS_QUERY;